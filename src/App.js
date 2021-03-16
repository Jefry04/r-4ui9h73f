import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ' ',
    };
  }
  repeatText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.repeatText.bind(this)}
          placeholder="Empieza a escribir algo"
        />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
