import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Navigation from '../../components/Navigation';
import FlashCard from '../../components/FlashCard';
import API from '../../utils/API.js';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

export default class HomePage extends React.Component {
  state = {
    mobileOpen: false,
    likedCards: [],
    cards: []
  };

  componentDidMount() {
    this.loadCards();

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
    API.getCards()
      .then(res =>
        this.setState({ cards: res.data}), console.log("Cards added")
      )
      .catch(err => console.log(err));
  };

  render() {
    const { likedCards, mobileOpen } = this.state;
   
    // const cards = [
    //   { title: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
    //   { title: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
    //   { title: 'Lorem ipsum dolor sit amet', question: 'Fusce venenatis varius lorem nec rutrum. Etiam condimentum dui eget tortor porttitor, eu egestas ligula dictum. Quisque a tellus eget dolor rutrum suscipit. Sed nisl massa, congue sit amet elit vel, fringilla interdum felis.', date: new Date().toLocaleDateString('en-CA') },
    // ];
    return <Navigation mobileOpen={mobileOpen} onDrawerToggle={this.handleDrawerToggle} container={this.props.container}>
      <div className="row">
        {this.state.cards.map((c, i) => <div className="column medium-4 small-12">
          <FlashCard key={i} {...c} liked={likedCards.includes(i)} onLike={() => this.likeCard(i)} />

        </div>)}
      </div>
    </Navigation>
  }
}
