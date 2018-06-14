#!/usr/bin/env node

const next = require('next')
const express = require('express')
const moment = require('moment')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// if (dev) 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

;(async()=>{
  await app.prepare()
  const db = await require('lowdb')(new (require('lowdb/adapters/FileAsync'))('db.json'))
  const server = express()
    .get('/api/post/:id', (req, res) => {
      const id = parseInt(req.params.id)
      const length = db.get('posts').value().length

      if (!(0 <= id && id < length)) return sendJSONResponse(res, 404, {
        code: 400,
        message: 'Invalid id'
      })

      return sendJSONResponse(res, 200, db.get('posts').find(({ id: pid }) => pid === id).value())
    })
    .put('/api/posts/:id', (req, res) => {
      const id = parseInt(req.params.id)
      const length = db.get('posts').value().length

      if (!(0 <= id && id < length)) return sendJSONResponse(res, 404, {
        code: 400,
        message: 'Invalid id'
      })
      
      const chunks = []
      req.on('data', c => chunks.push(c)).once('end', () => {
        try {
          const data = JSON.parse(Buffer.concat(chunks))
          
          db.get('posts')
            .get(id)
            .assign(data)
            .assign({ modified: moment().format() })
            .write()
            .then(post => res
              .status(200)
              .contentType('json')
              .send(post)
            )
        } catch (e) {
          console.error(e)
          return sendJSONResponse(res, 400, {
            code: 400,
            message: 'Invalid JSON'
          })
        }
      })
    })
    .get('/api/posts', (req, res) => {
      const posts = db.get('posts').value()
      let limit = parseInt('' + req.query.limit) || posts.length
      if (limit <= 0) return sendJSONResponse(res, 400, {
        code: 400,
        message: 'limit is less than or equal to the amount of posts'
      })

      const start = parseInt('' + req.query.start) || 0
      if (start >= posts.length) return sendJSONResponse(res, 400, {
        code: 400,
        message: 'from is greater than or equal to the amount of posts'
      })
      if (start < 0) start = 0
      return sendJSONResponse(res, 200, posts.slice(start, start + limit))
    })
    .post('/api/posts', (req, res) => {
      const chunks = []
      req.on('data', c => chunks.push(c)).once('end', () => {
        try {
          const data = JSON.parse(Buffer.concat(chunks))
          const newId = db.get('posts').value().length
          const date = moment().format()
          db.get('posts')
            .push(data)
            .last()
            .assign({ modified: date, created: date })
            .write()
          const content = JSON.stringify({ id: newId, uri: `${req.protocol}//${req.host}/api/posts/${newId}` })
          res
            .status(201)
            .set('Content-Type', 'application/json')
            .set('Content-Length', '' + content.length)
            .set('ETag', content)
            .send(content)
        } catch (e) {
          console.error(e)
          return sendJSONResponse(res, 400, {
            code: 400,
            message: 'Invalid JSON'
          })
        }
      })
    })
    .get('/todo_list', (req, res) => sendJSONResponse(res, 200, db.get('todos').value()))
    .post('/todo_list', (req, res) => {
      const data = []
      req.on('data', c => data.push(c)||(length+=c.byteLength)).once('end', () => {
        if (!data.length) return sendJSONResponse(res, 400, {
          code: 400,
          message: 'Invalid request'
        })
        const message = Buffer.concat(data).toString().slice(8)
        if (!message.length) return sendJSONResponse(res, 400, {
          code: 400,
          message: 'Invalid request'
        })
        db.get('todos').push({done: false, message}).write()
        res.redirect('/list')
      })
    })
    .post('/todo_list/:id/checked', (req, res) => {
      const i = +req.params.id
      const todos = db.get('todos').value()
      todos[i].done = !todos[i].done
      db.set('todos', todos).write()
      res.redirect('/list')
    })
    .post('/todo_list/:id/remove', (req, res) => {
      const i = +req.params.id
      const todos = db.get('todos').value()
      todos.splice(i, 1)
      db.set('todos', todos).write()
      res.redirect('/list')
    })
    .get('*', handle)

  const wss = new (require('ws').Server)({ noServer: true })
  wss.on('connection', wsConnection)
  setInterval(() => {
    wss.clients.forEach(ws => {
      if (!ws.isAlive) return ws.terminate()
      
      ws.isAlive = false
      ws.ping(null, false, true)
    })
  }, 10000)
  const read = require('fs').readFileSync
  const path = require('path').resolve
  ;(dev
    ? require('https')
    .createServer({ cert: read(path('./server.crt')), key: read(path('./server.key')) }, server)
    : require('http').createServer(server))
    .on('upgrade', (req, socket, head) => {
      if (req.url.startsWith('/ws/todo_list')) {
        wss.handleUpgrade(req, socket, head, wsConnection)
      }
    })
    .listen(3000, () => {
      console.log('> Ready on https://localhost:3000')
    })

    function wsConnection(ws) {
      // console.log(ws)
      ws.isAlive = true
      ws.on('pong', () => {
          ws.isAlive = true;
      })
      ws.on('message', json => {
        const message = JSON.parse(json)
        console.log(json)
        let i, todos
        switch (message.op) {
          case 0:
            db.get('todos').push({done: false, message: message.d}).write()
            break;
          case 1:
            i = +message.d
            todos = db.get('todos').value()
            todos[i].done = !todos[i].done
            db.set('todos', todos).write()
            break;
          case 2:
            i = +message.d
            todos = db.get('todos').value()
            todos.splice(i, 1)
            db.set('todos', todos).write()
            break;
        }
    
        wss.clients.forEach(c => {
          if (c != ws)
            c.send(json)
        })
      })
    }
})()

const sendJSONResponse = (res, code, json) => res
  .status(code)
  .set({
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': '' + JSON.stringify(json).length
  })
  .send(JSON.stringify(json))
