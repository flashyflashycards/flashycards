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
  onCardClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { _id, question, name, answer, date, liked, onLike, thumbsUp, thumbsDown } = this.props;
    return <Link to={"/deck/" + _id} className="deckCard">
      <div className="deckCard__upper">
        <div className="deckCard__title">
          {name}
        </div>
        <div className="deckCard__question">
          {answer}
        </div>
      </div>
      <div className="deckCard__lower">
        <div className="row align-middle collapse">
          <div className="column">
            <span className="deckCard__date">{date}</span>
          </div>
          <div className="column shrink">
            <button type="button" className="deckCard__button" onClick={e => this.onCardClick(e)}>
              <ContextDots />
            </button>
          </div>
        </div>
      </div>
    </Link>;
  }
}
