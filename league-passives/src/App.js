import React, { Component } from 'react';
import makePassiveApiCall from './passive_api/passive_api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.getRandomPassive.bind(this);
  }

  getRandomPassive () {
    makePassiveApiCall();
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
