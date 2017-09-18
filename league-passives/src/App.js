import React, { Component } from 'react';
import my_api_call from './my_api_call/my_api_call.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.getRandomPassive.bind(this);
  }

  getRandomPassive () {
    my_api_call();
  }

  render() {
    return (
      <div className="App">
          <button type="button" onClick={this.getRandomPassive}>Get Random Passive</button>
      </div>
    );
  }
}

export default App;
