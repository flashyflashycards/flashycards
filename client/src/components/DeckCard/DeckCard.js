import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LikeIcon from './components/LikeIcon';
import ContextDots from './components/ContextDots';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";


import './styles/DeckCard.scss';
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

export default class DeckCard extends PureComponent {
  render() {
    const { _id, question, name, answer, date, liked, onLike, thumbsUp, thumbsDown, addComment } = this.props;
    return <div className="deckCard">
      <Link to={"/deck/" + _id}>
      <div className="deckCard__upper">
        <div className="deckCard__title">
          {name}
        </div>
        <div className="deckCard__question">
          {answer}
        </div>
      </div>
      </Link>
      <div className="deckCard__lower">
        <div className="row align-middle collapse">
          <div className="column">
            <span className="deckCard__date">{date}</span>
          </div>
          <div className="column shrink">
            {/* <button type="button" className={`deckCard__button ${liked ? 'deckCard__button--active' : ''}`} onClick={() => onLike()}>
              <LikeIcon />
              {thumbsUp}
            </button > */}
          </div>
          <div className="column shrink">
            {/* <button type="button" className="deckCard__button" onClick={() => addComment()} >
              <ContextDots />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  }
}
