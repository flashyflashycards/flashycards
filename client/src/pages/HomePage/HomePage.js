import React from 'react';
import Navigation from '../../components/Navigation';
import FlashCard from '../../components/FlashCard';
import Logo from '../../components/Logo';
import API from '../../utils/API.js';
import EditButton from './components/EditButton';
import CloseButton from './components/CloseButton';

import './styles/HomePage.scss';


export default class HomePage extends React.Component {
  
  state = {
    mobileOpen: false,
    likedCards: [],
    cards: [],
    cardsID: [],
    deckID: this.props.deckID, 
    test: ""
  };

  // this.loadCardsInfo = this.loadCardsInfo.bind(this);

  componentDidMount() {
    this.loadCards();
    // console.log(this.state.cardsID);
    

  }

  componentWillUpdate() {
    console.log("update");
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  likeCard(i) {
    const { likedCards } = this.state;
    if (likedCards.includes(i)) {
      this.setState({ likedCards: likedCards.filter(c => c !== i) });
    } else {
      this.setState({ likedCards: likedCards.concat(i) });
    }
    // API.addLikes(i)
    API.addLikes(this.state.cards[i]._id, {thumbsUp: this.state.cards[i].thumbsUp+1});
    this.loadCards();
  }
  
  
  loadCards = () => {
    API.getDeck(this.props.match.params.id)
      .then(res => {
        console.log("Cards before: ");
        console.log(this.state.cards);
        //  this.setState({ cardsID: res.data.cards}) 
         this.loadCardsInfo()}
        //  console.log(res.data),
      )//).then(res => 


        // this.state.cardsID.map((c, i) => API.getCard(c).then(res =>
  //     this.setState({ cards: res.data}),
  //    // console.log(res.data)
  //  )
       //  console.log(res.data),
      //)
      .catch(err => console.log(err));
  };

  updateCards (currentCards) {
    // this.setState({cards: currentCards});
    // this.forceUpdate();
  };

  loadCardsInfo = () => {
    
    var currentCards = ["1", "1", "1"];
    
    API.getCard(this.props.match.params.id)
      .then(res => {
        console.log("Card #1: ");
        console.log(res);
        // console.log(this.state.cards);
        // this.setState({ test:"Yo"}) 
        // console.log(this.state.test);
         this.setState({cards: res.data});
        
      })

  //   cardIds.map(function(c, i) { 
      
  //      API.getCard(c).then( res => {
  //        console.log(res);
        
  //     });
  //  })

  //  return this.updateCards(currentCards);

  //  alert(typeof currentCards);
  //  this.updateCards(currentCards);
  //  this.setState({cards: ["1","3"]});
  //  console.log("Current Cards");
  //  console.log(currentCards);
  //  this.setState({cards: currentCards});
  //  this.setState({cards: currentCards});
  //  console.log("Cards after: ");

  //  console.log(this.state.cards);
   
  //  console.log("loadcards");
  //  this.forceUpdate();

  //  this.setState({cards:currentCards});
    // API.getCard(this.props.match.params.id)
      // .then(res =>
      //    this.setState({ cardsID: res.data.cards}),
      //   // console.log(res.data)
      // )
      // .catch(err => console.log(err));
  };



  render() {
    console.log("render");
    const { likedCards, mobileOpen } = this.state;
   
    const cards = [
      { title: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
      { title: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
      { title: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
    ];
    console.log("This is the cards array before rendering");
    console.log(this.state.cards);
    // this.setState({cards: ["1", "3"]});

    const homePageControls = <div className="homePage__controls">
      <div className="homePage__logo">
        <CloseButton />
      </div>
      <EditButton />
    </div>

    return <Navigation controls={homePageControls}>
      <div className="row">
        {cards.map((c, i) => <div className="column medium-4 small-12" key={i}>
          <FlashCard {...c} liked={likedCards.includes(i)} onLike={() => this.likeCard(i)} />
        </div>)}
      </div>
    </Navigation>
    
    return <Navigation mobileOpen={mobileOpen} onDrawerToggle={this.handleDrawerToggle} container={this.props.container} deckID={this.props.match.params.id} userID={this.props.match.params.id2}>
      <div className="row">
        {/* <SaveBtn /> */}
        {this.state.cards.map((c, i) => <div className="column medium-12 small-12"><FlashCard key={i} {...c} liked={likedCards.includes(i)} onLike={() => this.likeCard(i)} /></div>)}
      </div>
    </Navigation>
  }
}
