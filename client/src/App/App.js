import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Users from "./pages/Users";
import './App.css';
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";



class App extends Component {

  saveUser = i => {
    alert ("User added");
    API.saveUser(  {
      firstName: "Jesus",
      lastName: "Qdsadsen",
      username:
        "dasdxdaso", 
      password: "cxzcxz"
    })
      .then(res => console.log("Added user"))
      .catch(err => console.log(err));
  
  };

  saveCard = i => {
    alert ("Card added");
    API.saveCard(  {
      question: "Who are you",
      answer: "Billy",
      thumbsUp: "5",
      thumbsDown: "2",
      comments: "Yeah, easy question"
    })
      .then(res => console.log("Added card"))
      .catch(err => console.log(err));
  
  }

  saveDeck = i => {
    alert ("Deck added");
    API.saveDeck(  {
      name: "An example of making a deck with cards in it already (uncomment below)"
      // cards: "5bd3b885d6b6acc708b9c6f2"
    })
      .then(res => console.log("Added deck"))
      .catch(err => console.log(err));
  } 

  render() {
    return (
      <div className="App">
        <NavigationBar />`

        <SaveBtn style={{border:'solid 1px red'}} word={"Add an user!"} onClick={(i) => this.saveUser(i)} />
        <SaveBtn style={{border:'solid 1px green'}} word={"Add a deck!"} onClick={(i) => this.saveDeck(i)} />
        <SaveBtn style={{border:'solid 1px blue'}} word={"Add a card!"} onClick={(i) => this.saveCard(i)} />

      </div>
    );
  }
}

export default App;
