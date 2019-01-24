import React, { Component } from 'react';
import Counter from './comp1/Counter'
import SampleList from './comp1/SampleList'
import RefOuter from './comp2/RefOuter'
import TodoComponent from './comp4/TodoComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoComponent/>
      </div>
    );
  }
}

export default App;
