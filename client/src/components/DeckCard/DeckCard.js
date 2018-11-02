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
    const { _id, question, answer, date, liked, onLike, thumbsUp, thumbsDown } = this.props;
    return <div className="DeckCard">
      <Link to={"/cards/" + _id}>
      <div className="DeckCard__upper">
        <div className="DeckCard__title">
          {question}
        </div>
        <div className="DeckCard__question">
          {answer}
        </div>
      </div>
      </Link>
      <div className="DeckCard__lower">
        <div className="row align-middle collapse">
          <div className="column">
            <span className="DeckCard__date">{date}</span>
          </div>
          <div className="column shrink">
            <button type="button" className={`DeckCard__button ${liked ? 'DeckCard__button--active' : ''}`} onClick={() => onLike()}>
              <LikeIcon />
              {thumbsUp}
            </button >
          </div>
          <div className="column shrink">
            <button type="button" className="DeckCard__button" >
              <ContextDots />
            </button>
          </div>
        </div>
      </div>
    </div>
  }
}
