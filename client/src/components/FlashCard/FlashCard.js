import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LikeIcon from './components/LikeIcon';
import ContextDots from './components/ContextDots';
import IconButton from '@material-ui/core/IconButton';

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
    const { title, question, date, liked, onLike } = this.props;
    return <div className="flashCard">
      <div className="flashCard__upper">
        <div className="flashCard__title">
          {title}
        </div>
        <div className="flashCard__question">
          {question}
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
            </button >
          </div>
          <div className="column shrink">
            <button type="button" className="flashCard__button" >
              <ContextDots />
            </button>
          </div>
        </div>
      </div>
    </div>
  }
}
