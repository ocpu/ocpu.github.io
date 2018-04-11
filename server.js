#!/usr/bin/env node

const next = require('next')
const express = require('express')
const moment = require('moment')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => require('lowdb')(new (require('lowdb/adapters/FileAsync'))('db.json')))
  .then(db => express()
    .get('/api/post/:id', (req, res) => {
      const id = parseInt(req.params.id)
      const length = db.get('posts').value().length

      if (!(0 <= id && id < length)) return sendJSONResponse(res, 404, {
        code: 401,
        message: 'Invalid id'
      })

      return sendJSONResponse(res, 200, db.get('posts').find(({ id: pid }) => pid === id).value())
    })
    .put('/api/posts/:id', (req, res) => {
      const id = parseInt(req.params.id)
      const length = db.get('posts').value().length

      if (!(0 <= id && id < length)) return sendJSONResponse(res, 404, {
        code: 401,
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
          return sendJSONResponse(res, 401, {
            code: 401,
            message: 'Invalid JSON'
          })
        }
      })
    })
    .get('/api/posts', (req, res) => {
      const posts = db.get('posts').value()
      let limit = parseInt('' + req.query.limit) || posts.length
      if (limit <= 0) return sendJSONResponse(res, 401, {
        code: 401,
        message: 'limit is less than or equal to the amount of posts'
      })

      const start = parseInt('' + req.query.start) || 0
      if (start >= posts.length) return sendJSONResponse(res, 401, {
        code: 401,
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
          return sendJSONResponse(res, 401, {
            code: 401,
            message: 'Invalid JSON'
          })
        }
      })
    })
    .get('*', handle)
  )
  .then(server => server.listen(3000, () => {
      console.log('> Ready on http://localhost:3000')
  }))

const sendJSONResponse = (res, code, json) => res
  .status(code)
  .set({
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': '' + JSON.stringify(json).length
  })
  .send(JSON.stringify(json))
