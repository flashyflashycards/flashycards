import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import API from '../../../utils/API.js'

export default class EditButton extends PureComponent {
  state = {
    open: false,
    question: '',
    answer: ''
  }

  onAddCard= () => {
    API.saveCard({
      question: this.state.question,
      answer: this.state.answer,
      thumbsUp: '0',
      thumbsDown: '0'
    })
      .then(res => alert('Added card'), window.location.reload())
      .catch(err => console.log(err))
  }

  submit = () => {
    const { question, answer } = this.state;
    this.onAddCard({ question, answer });
    // this.props.onAddCard({ question, answer });
  }

  render() {
    const { open, title, question, answer } = this.state;

    return <React.Fragment>
      <button type="button" className="app-navigation__edit" onClick={() => this.setState({ open: true })}>
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
  }
}

EditButton.propTypes = {
  onAddCard: PropTypes.func
}
