import React, {Component} from 'react'

class TodoInput extends Component{

    clickHandle = () => {
        console.log("Todo Input click handle");
        const input = this.input;
        console.log(this.props.update);
        console.log(input.value);

        this.props.add(input.value);

        input.value = ''
    };

    render(){
        const update = this.props.update;

        return(
            <div>
                <small>Todo Input</small>
                <input type='text' ref={(ref) => this.input = ref}></input>
                <button onClick={this.clickHandle}>ADD</button>
                <div>{update}</div>
            </div>
        )
    }
}

export default TodoInput