import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count : 0,
      color : "green",
      Login : false
    }
  }
  dec = () =>{
    this.setState({count: this.state.count - 1});
  }
  inc = () => {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div className="App">
        <div className="counter">
          <button onClick={this.dec}>-</button>
          {this.state.count}
          <button onClick={this.inc}>+</button>
        </div>
        <div className="color" style={{backgroundColor: this.state.color}}>
          <button onClick={() => this.setState({color: "black"})}>Black</button>
          <button onClick={() => this.setState({color: "red"})}>Red</button>
          <button onClick={() => this.setState({color: "teal"})}>Teal</button>
        </div>
        <div className="login">
          <button onClick={() => this.setState({Login: !this.state.Login})}>Login</button><br />
          {this.state.Login &&  <div className="loginForm">
            Name : <input type="text"  /><br />
            Email : <input type="email" /><br />
            Password : <input type = "password"/>
          </div>}
        </div>
      </div>
    );
  }
}

export default App;