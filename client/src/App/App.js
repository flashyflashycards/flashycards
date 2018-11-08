import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Users from "./pages/Users";
import SaveBtn from '../components/SaveBtn'
import API from '../utils/API.js'
import './styles/foundation.min.css'
import './styles/App.css'
import HomePage from '../pages/HomePage'
import DecksPage from '../pages/DecksPage'
import StartPage from '../pages/StartPage'
import LandingPage from '../pages/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  saveUser = i => {
    API.saveUser({
      firstName: 'work',
      lastName: 'wont',
      username: 'Johnw',
      password: 'cxxxxxz'
    })
      .then(res => alert('Added user'))
      .catch(err => alert('You need a longer password'))
  }

  saveCard = i => {
    API.saveCard({
      question: 'Who are you',
      answer: 'Billy',
      thumbsUp: '5',
      thumbsDown: '2',
      comments: 'Yeah, easy question'
    })
      .then(res => alert('Added card'))
      .catch(err => console.log(err))
  }

  saveDeck = i => {
    API.saveDeck({
      name: 'An example of making a deck with cards in it already (uncomment below)'
      // cards: "5bd3b885d6b6acc708b9c6f2"
    })
      .then(res => alert('Added deck'))
      .catch(err => console.log(err))
  }

  render () 
  // {
  //   return (
  //     <div className='App'>

  //       <HomePage />
  //       {/* <NavigationBar />`

  //       <SaveBtn style={{border:'solid 1px red'}} word={"Add an user!"} onClick={(i) => this.saveUser(i)} />
  //       <SaveBtn style={{border:'solid 1px green'}} word={"Add a deck!"} onClick={(i) => this.saveDeck(i)} />
  //       <SaveBtn style={{border:'solid 1px blue'}} word={"Add a card!"} onClick={(i) => this.saveCard(i)} /> */}

  //     </div>
  //   )
  // }

  {
    return <Router>
      <div className="app">
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/decks" component={DecksPage} />
        <Route path="/deck/:id" render={(props) => <HomePage {...props} />} />
        <Route path="/deck/:id/start" render={(props) => <StartPage {...props} />} />
      </div>
    </Router>;
  }
}
