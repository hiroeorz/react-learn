import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "Hiroe",
        timeline: ["test", "des"]
      }
  }

  render() {
    const name = this.state.name;
    var tweets = [];

    for (var i in this.state.timeline) {
      tweets.push(<li>{ this.state.timeline[i] }</li>);
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello { name }</p>

        <input type="text" value={ name }
          onChange={e => {this.setState({ name: e.target.value })}} />

        <button onClick={e => {
          var array = this.state.timeline;
          array.unshift(this.state.name);
          this.setState({timeline: array});
         }}>ツイート</button>

        <ul>{ tweets }</ul>
      </div>
    );
  }
}

export default App;
