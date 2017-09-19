import React, { Component } from 'react';
import my_api_calls from './my_api_call/my_api_call.js';
import Passiveview from './views/passiveView.js';
import Answerbox from './views/answerBox.js';
import Userstatus from './views/userStatus.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      username: 'anonymous',
      score: 0,
      passiveUrl: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/ViPassive.png',
      champ: 'vi',
      answer: 'answer',
    };
    this.getRandomPassive = this.getRandomPassive.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setUser (event) {
    var user = document.getElementById("username").value;
    my_api_calls.user_api_call(this, user);
    console.log('hello there,', user);
    this.setState({username: user});
    event.preventDefault();
    event.stopPropagation();
  }

  checkAnswer (event) {
    var guess = document.getElementById("answer").value.toLowerCase();
    if(guess === this.state.champ) {
      this.setState({score: this.state.score + 1, answer:''});
      console.log('nice job!', this.state.score);
      this.getRandomPassive();
    } else {
      console.log('you need to play league more!');
    }
    event.preventDefault();
    event.stopPropagation();
  }

  getRandomPassive () {
    my_api_calls.passive_api_call(this);
  }

  render() {
    return (
      <div className="App">
        <Userstatus setUser={this.setUser} username={this.state.username} score={this.state.score}/>
        <Passiveview passiveUrl={this.state.passiveUrl}/>
        <Answerbox answer={this.state.answer} checkAnswer = {this.checkAnswer}/>
        <button type="button" onClick={this.getRandomPassive}>Get Random Passive</button>
      </div>
    );
  }
}

export default App;
