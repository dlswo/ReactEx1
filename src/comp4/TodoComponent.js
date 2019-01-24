import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoComponent extends Component{

    state = {
        todos:['AAA','BBB','CCC']
    }

    addTodo = (newTodo) => {
        console.log("add Todo....." + newTodo)
        console.log(this.state)
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render(){
        return(
            <div>
                <TodoInput add={this.addTodo}/>
                <TodoList arr={this.state.todos}/>
            </div>
        )
    }
}

export default TodoComponent