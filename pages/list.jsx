import css from "../styles.sass"
import Layout from '../components/layout'
import 'isomorphic-fetch'

class List extends React.Component {
  static getInitialProps = async () =>
    fetch(`http://localhost:3000/todo_list`).then(r => r.json()).then(r => ({todos:r}))

  state = {
    message: '',
    todos: this.props.todos,
    isClient: false
  }
  ws = typeof WebSocket !== 'undefined'&&new WebSocket('ws://localhost:3000/ws/todo_list')

  componentDidMount() {
    this.ws.addEventListener('message', e => {
      const message = JSON.parse(e.data)
      console.log(message)
      const d = message.d,
            todos = this.state.todos
      switch (message.op) {
        case 0:
          todos.push({done: false, message: d})
          break;
        case 1:
          todos[+d].done = !todos[+d].done
          break;
        case 2:
          todos.splice(+d, 1)
          break;
      }
      this.setState({todos})
    })
    this.ws.addEventListener('ping', () => this.ws.pong())
    this.setState({isClient:true})
  }

  newTodo = e => {
    e.preventDefault()
    if (this.state.message) {
      const todos = this.state.todos
      todos.push({done: false, message: this.state.message})
      this.ws.send(JSON.stringify({op:0,d:this.state.message}))
      this.setState({message: '', todos})
    }
  }

  removeTodo = e => {
    e.preventDefault()
    const todos = this.state.todos
    const i = +e.target.parentNode.id
    todos.splice(i, 1)
    this.ws.send(JSON.stringify({op:2,d:i}))
    this.setState({todos})
  }

  setChecked = e => {
    const todos = this.state.todos
    const i = +e.target.parentNode.parentNode.id
    todos[i].done = !todos[i].done
    this.ws.send(JSON.stringify({op:1,d:i}))
    this.setState({todos})
  }

  render = () => (
    <Layout ref={layout => this.layout = layout}>
      <form action="/todo_list" method="post" onSubmit={this.newTodo} autoComplete="off">
        <input type="text" name="todo" placeholder="New todo" value={this.state ? this.state.message : ''} onInput={e => this.setState({message:e.target.value})}/>
        {!this.state.isClient&&<input type="submit" value="Create"/>}
      </form>
      <table style={{listStyle:'none',padding:'0'}}>
        <tbody>
          {this.props.todos.map(({done,message}, id) => 
            <tr key={id} id={id}>
              <td>
                {!this.state.isClient ? (
                  <form action={'/todo_list/'+id+'/checked'} method="POST">
                    <input type="checkbox" checked={done}/>
                    <input type="submit" value="Update"/>
                  </form>
                ) : (
                  <input type="checkbox" checked={done} onChange={this.setChecked}/>
                )}
              </td>
              <td><span style={{textDecoration: done ? 'line-through' : 'none'}}>{message}</span></td>
              <td>
                {!this.state.isClient ? (
                  <form action={'/todo_list/'+id+'/remove'} method="POST">
                    <button type="submit">&times;</button>
                  </form>
                ) : (
                  <button style={{padding: '0', cursor:'pointer',border:'none',background:'none',margon:'0'}} onClick={this.removeTodo}>&times;</button>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  )
}

export default List
