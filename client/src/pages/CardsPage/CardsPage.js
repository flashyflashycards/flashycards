import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';
import FlashCard from '../../components/FlashCard';

export default class CardsPage extends Component {
  render() {
    const deckPageControls = <div className="decksPage__controls">
      <div className="decksPage__logo">
        <Logo />
      </div>
      <EditButton />
    </div>

    return <Navigation controls={deckPageControls}>
      <div className="row">
        {Decks.map((c, i) => <div className="column medium-4 small-12" key={i}>
          <FlashCard {...c} liked={likedDecks.includes(i)} onLike={() => this.likeDeck(i)} />
        </div>)}
      </div>
    </Navigation>
  }
}
