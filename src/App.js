import React, { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import CounterButton from './CounterButton';

class App extends Component {
  
  state = { counter: 0 };
  
  handleUpdate = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
        // while using prevState 'this' keyword can't be used not
      };
    });
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
      // to save the previos state
      //counter : this.prevState.counter+1
    })
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      {/* Is one way of doing the multiple components [<Button />,<Display/>]   */}
      {/* or inside <>  <Button /> ,<Display/>  <> */}
        <div>
            <CounterButton  onClick={this.handleUpdate} counter={5}/>
            <CounterButton  onClick={this.handleUpdate} counter={10}/>
            <CounterButton  onClick={this.handleUpdate} counter={15}/>
            <button onClick={()=> alert('Hey ..')}   > Click Me </button>
        </div>
      </header>
    </div>
    );
  }
}
export default App;

