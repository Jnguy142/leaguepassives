import React, { Component } from 'react';
import my_api_call from './my_api_call/my_api_call.js';
import Passiveview from './views/passiveView.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      passiveUrl: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/ViPassive.png',
      champ: 'Vi',
    };
    this.getRandomPassive = this.getRandomPassive.bind(this);
  }

  getRandomPassive () {
    my_api_call(this);
  }

  render() {
    return (
      <div className="App">
        <Passiveview passiveUrl={this.state.passiveUrl}/>
        <button type="button" onClick={this.getRandomPassive}>Get Random Passive</button>
      </div>
    );
  }
}

export default App;
