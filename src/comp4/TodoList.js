import React, {Component} from 'react'

class TodoList extends Component{
    render(){
        const todoLi = this.props.arr.map((item, index) => <li key={index}>{item}</li>)

        return(
            <div>
                {todoLi}
            </div>
        )
    }
}

export default TodoList