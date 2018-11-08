import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LikeIcon from './components/LikeIcon';
import ContextDots from './components/ContextDots';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";


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
  render() {
    const { _id, question, answer, date, liked, onLike, thumbsUp, thumbsDown, name } = this.props;
    return <Link to={"/cards/" + _id} className="flashCard">
      <div className="flashCard__upper">
        <div className="flashCard__title">
          {question}
          {name}
        </div>
        <div className="flashCard__question">
          {answer}
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
            <button type="button" className="flashCard__button" >
              <ContextDots />
            </button>
          </div>
        </div>
      </div>
    </Link>;
  }
}
