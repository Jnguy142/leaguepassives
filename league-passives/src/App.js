import React, { Component } from 'react';
import my_api_calls from './my_api_call/my_api_call.js';
import Passiveview from './views/passiveView.js';
import Answerbox from './views/answerBox.js';
import Userstatus from './views/userStatus.js';
import Allusers from './views/allUsers.js';
var url = 'http://localhost:3000/';
var path = 'api/users/create';
var path2 = 'api/users/update';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      username: 'casualpleb',
      score: 0,
      passiveUrl: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/ViPassive.png',
      champ: 'vi',
      answer: 'answer',
    };
    this.getRandomPassive = this.getRandomPassive.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount () {
    var userState = {
      username: this.state.username,
      score: 0,
    }
    my_api_calls.user_api_call(this, userState, url + path, 'POST');
  }

  setUser (event) {
    var user = document.getElementById("username").value;
    var userState = {
      username: user,
      score: 0,
    }
    my_api_calls.user_api_call(this, userState, url + path, 'POST');
    event.preventDefault();
    event.stopPropagation();
  }

  checkAnswer (event) {
    var guess = document.getElementById("answer").value.toLowerCase();
    var userState = {
      username: this.state.username,
      score: this.state.score,
    }
    if(guess === this.state.champ) {
      my_api_calls.user_api_call(this, userState, url + path2, 'PUT');
      document.getElementById("answer").value = "";
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
        <Allusers />
      </div>
    );
  }
}

export default App;
