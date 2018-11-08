import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LikeIcon from './components/LikeIcon';
import ContextDots from './components/ContextDots';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import API from '../../utils/API.js'


import './styles/FlashCard.scss';
import { withStyles } from '@material-ui/core';

const StyledIconButton = withStyles({
  root: {
    background: '#eef0f2',
    marginLeft: '0.5rem',
    width: '48px',
    height: '48px',
    color: '#f0ad3c'
  }
})(IconButton);



export default class FlashCard extends PureComponent {
  state = {
    open: false,
    comment: ''
  }

  addComment(i, comment) { 

    const {_id, addComment, comments } = this.props;
    let commentsArray = comments;
    commentsArray.push(comment);

    API.addLikes(i, {comments: commentsArray});
    console.log(commentsArray);
    
  }

  submit = () => {
    let { comment, open} = this.state;
    const {_id, addComment } = this.props;

    this.addComment(_id, comment);
    open = false;
    this.setState({ open: false });
    window.location.reload()
    // this.props.onAddCard({ question, answer });
  }

  render() {
    const { _id, question, answer, date, liked, onLike, thumbsUp, thumbsDown, name, comments, addComment } = this.props;
    const { open, title, deckID, comment } = this.state;
    return <div className="flashCard">
      <Link to={"/cards/" + _id}>
      <div className="flashCard__upper">
        <div className="flashCard__title">
          {question}
          {name}
        </div>
        <div className="flashCard__question">
          {answer}
        </div>

      </div>
      </Link>
      <div className="flashCard__middle">
        <div className="flashCard__comments">
          <p>Comments:</p>
          {comments.map((c, i) =><div>{c}</div> )}
        </div>

      </div>

      <div className="flashCard__lower">
        <div className="row align-middle collapse">
          <div className="column">
            <span className="flashCard__date">{date}</span>
          </div>
          <div className="column shrink">
            <button type="button" className={`flashCard__button ${liked ? 'flashCard__button--active' : ''}`} onClick={() => onLike()}>
              <LikeIcon />
              {thumbsUp}
            </button >
          </div>
          <div className="column shrink">
            <button type="button" className={`flashCard__button `} onClick={() => this.setState({ open: true })}>
              <ContextDots />
              <Dialog open={open} onClose={() => this.setState({ open: false })}>
                <DialogTitle id="add-comment">Add comment</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="Comment"
                    label="Comment"
                    type="text"
                    value={comment}
                    onChange={e => this.setState({ comment: e.target.value })}
                    fullWidth
                  />
                  {/* <TextField
                    id="answer"
                    label="answer"
                    type="text"
                    value={answer}
                    onChange={e => this.setState({ answer: e.target.value })}
                    fullWidth
                  /> */}
                </DialogContent>
                <DialogActions onClose={() => this.setState({ open: false })}>
                  <Button onClick={this.submit} color="primary">
                    Add comment
                    </Button>
                </DialogActions>
              </Dialog>
            </button>
          </div>
        </div>
      </div>
    </div>
  }
}
