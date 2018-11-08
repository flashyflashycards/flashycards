import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import API from '../../../utils/API.js'
import { Link } from "react-router-dom";

export default class EditButton extends PureComponent {
  state = {
    open: false,
    question: '',
    answer: '',
    deckID: "",
    userID: ""
  }

  onAddCard= () => {
    // alert(this.props.deckID);
    API.saveCard(this.props.deckID,{
      question: this.state.question,
      answer: this.state.answer,
      thumbsUp: '0',
      thumbsDown: '0',
      deckID: this.props.deckID
    })
      // .then(API.updateDeck("5bd3c93fc09bba9750664c1f", {cards: ["did it ddxzxwork?"]}))
      .then(res => alert('Added card'), window.location.reload())
      .catch(err => console.log(err))
  }

  onAddDeck= () => {
    // alert(this.props.deckID);
    API.saveDeck({
      name: this.state.question,
      userID: "5bde5ca4e6bb665ed8b877c1"
    })
      // .then(API.updateDeck("5bd3c93fc09bba9750664c1f", {cards: ["did it ddxzxwork?"]}))
      .then(res => alert('Added deck'), window.location.reload())
      .catch(err => console.log(err))
  }

  submit = () => {
    const { question, answer } = this.state;
    if (this.props.deckID === undefined) {
      this.onAddDeck({ question });
    } else {
      this.onAddCard({ question, answer });
    };
    
    // this.props.onAddCard({ question, answer });
  }

  renderAddCard = () => {
    const { open, title, question, answer, deckID } = this.state;
    return <React.Fragment>
      <button type="button" className="homePage__edit" onClick={() => this.setState({ open: true })}>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="24" viewBox="0 0 6 24">
          <path fill="#17262B" d="M.35 21.077L3 23.728l2.652-2.651V5.436H.35v15.64zM5.653 1.334a.996.996 0 0 0-.997-.997h-3.31a.996.996 0 0 0-.996.997v2.588h5.303V1.334z" />
        </svg>
      </button>

      
      <Dialog open={open} onClose={() => this.setState({ open: false })}>
        <DialogTitle id="add-card">Add new card</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="question"
            type="text"
            value={question}
            onChange={e => this.setState({ question: e.target.value })}
            fullWidth
          />
          <TextField
            id="answer"
            label="answer"
            type="text"
            value={answer}
            onChange={e => this.setState({ answer: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.submit} color="primary">
            Add card
            </Button>
        </DialogActions>
      </Dialog>
      
    </React.Fragment>;
  };

  renderAddDeck = () => {
    const { open, title, question, answer, deckID } = this.state;
    return <React.Fragment> <Link to={"/deck/" + this.props.deckID + "/start"}>

 
      <button type="button" className="homePage__edit" onClick={() => alert("Starting deck slideshow!")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="24" viewBox="0 0 6 24">
          <path fill="#17262B" d="M.35 21.077L3 23.728l2.652-2.651V5.436H.35v15.64zM5.653 1.334a.996.996 0 0 0-.997-.997h-3.31a.996.996 0 0 0-.996.997v2.588h5.303V1.334z" />
        </svg>
      </button>
      </Link>

      
    </React.Fragment>;
  };

  render() {

    const { open, title, question, answer, deckID } = this.state;

    if (this.props.deckID === undefined) {
      return this.renderAddCard();
    } else {
      return this.renderAddDeck();
    }
    
    // return <div style={{ width: '80px', height: '80px', padding: '26px 19px', textAlign: 'center' }}>
    //     return this.renderAddDeck();
    //         </div>
  }
}

EditButton.propTypes = {
  onAddCard: PropTypes.func
}
