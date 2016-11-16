import React, { Component } from 'react'
import NewTodo from "./AddNewTodo.js"
class Todos extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let todos = this.props.incompleted.map((todo, i) => {
      return <li key={i}>{todo.name} </li>
    })
    return(
      <div>
        <h1> Todo List </h1>
          <h3> Incomplete Todos </h3>
          <ul>
            {todos}
          </ul>
      </div>,
      <NewTodo />
    )
  }
}

export default Todos
