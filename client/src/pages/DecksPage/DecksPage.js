import React from 'react';
import Navigation from '../../components/Navigation';
import DeckCard from '../../components/DeckCard';
import API from '../../utils/API.js'
import Logo from '../../components/Logo';
import AddButton from './components/AddButton';
import './styles/DecksPage.scss';

export default class DecksPage extends React.Component {
  state = {
    mobileOpen: false,
    likedDecks: [],
    decks: []
  };

  componentDidMount() {
    this.loadDecks();

  }
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  likeCard(i) {
    const { likedDecks } = this.state;
    if (likedDecks.includes(i)) {
      this.setState({ likedDecks: likedDecks.filter(c => c !== i) });
    } else {
      this.setState({ likedDecks: likedDecks.concat(i) });
    }
    // API.addLikes(i)
    API.addLikes(this.state.decks[i]._id, {thumbsUp: this.state.decks[i].thumbsUp+1});
    this.loadDecks();
  }
  
  
  loadDecks = () => {
    API.getDecks()
      .then(res =>
        this.setState({ decks: res.data}), console.log("Decks added")
      )
      .catch(err => console.log(err));
  };

  render() {
    const { likedDecks, mobileOpen } = this.state;
   
    const Decks = [
      { name: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
      { name: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
      { name: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
    ];

    const deckPageControls = <div className="decksPage__controls">
      <div className="decksPage__logo">
        <Logo />
      </div>
      <AddButton />
    </div>

    return <Navigation controls={deckPageControls}>
      <div className="row">
        {Decks.map((c, i) => <div className="column medium-4 small-12" key={i}>
          <DeckCard {...c} liked={likedDecks.includes(i)} onLike={() => this.likeDeck(i)} />
        </div>)}
      </div>
    </Navigation>
  }
}
