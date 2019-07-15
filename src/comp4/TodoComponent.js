import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoComponent extends Component{

    state = {
        todos:['AAA','BBB','CCC'],
        update: ""
    };

    addTodo = (newTodo) => {
        console.log("add Todo....." + newTodo);
        console.log(this.state);
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
        this.state.update = "";
    };

    removeTodo = (idx) => {
        console.log("TodoComponent removeTodo...." + idx);
        this.state.todos.splice(idx,1);
        this.setState({
            todos: this.state.todos
        })
    };

    updateTodo = (idx) => {
        console.log("TodoCompo update" + idx);
        this.state.update = this.state.todos[idx];
        console.log(this.state.update);

    };

    render(){
        return(
            <div>
                <TodoInput add={this.addTodo} update={this.state.update}/>
                <TodoList arr={this.state.todos} remove={this.removeTodo} update={this.updateTodo}/>
            </div>
        )
    }
}

export default TodoComponent