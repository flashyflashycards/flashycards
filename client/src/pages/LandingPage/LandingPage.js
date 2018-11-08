import React, { Component } from 'react';
import Header from './components/Header';
import Parallax from "./components/Parallax";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import './styles/LandingPage.scss';

export default class LandingPage extends Component {
  state = {
    loginOpen: false,
    username: '',
    password: ''
  }

  login = () => {
    // TODO: Validation
    this.props.history.push('/decks')
  }

  render() {
    const { loginOpen, username, password } = this.state;

    return <React.Fragment>
      <Dialog open={loginOpen} onClose={() => this.setState({ open: false })}>
        <DialogTitle id="add-card">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Username"
            type="text"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.login} color="primary">
            Login
            </Button>

        </DialogActions>
      </Dialog>
      <Header color="transparent" brand="Flashcards" fixed changeColorOnScroll={{ height: 400, color: 'white' }} rightLinks={<button type="button" className="landingPage__login" onClick={() => this.setState({ loginOpen: true })}>Login</button>} />
      <Parallax filter image="https://preview.redd.it/mfq40zt18xu11.jpg?width=960&crop=smart&auto=webp&s=d9762c5a8187828b5ff25fc4bc6c0a18c4911acd">
        <div className="landingPage__header">
          <div className="row">
            <div className="column">
              <h1 className="white landingPage__title">Flashcards</h1>
              <h2 className="landingPage__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="landingPage__main">
        <div className="row column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit, arcu eget malesuada pharetra, turpis odio pharetra diam, at malesuada purus leo vel arcu. Aliquam semper justo vel molestie interdum. Integer eget erat vitae lectus commodo tempor eget et nisl. Nunc luctus aliquam purus, vitae volutpat dolor porttitor at. Sed tempus, libero vitae vehicula blandit, turpis massa scelerisque tellus, in ullamcorper lacus massa sed lacus. Etiam convallis rhoncus turpis a pulvinar. Sed eu rutrum nunc, eu dignissim nibh. Nulla a orci ut lectus venenatis sodales. Fusce bibendum vulputate mauris, a ultrices dui finibus et. Nam id est sapien. Pellentesque et ligula vitae ipsum dictum pellentesque. Nunc eget mi ut erat pulvinar ornare ac ultricies ipsum. Nam condimentum arcu mi, a vehicula ex tempus maximus.
          </p>
          <p>
            Sed sit amet est pellentesque, consequat felis ut, eleifend ex. Mauris euismod tempus varius. Morbi in nibh odio. Etiam orci ante, efficitur id risus ut, hendrerit cursus risus. Morbi in urna id nulla dignissim accumsan a in arcu. Curabitur nec consequat libero. Phasellus non lacus lectus. In turpis mauris, congue non lacus at, finibus congue felis. Maecenas dictum ex non mattis mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>

      </div>
    </React.Fragment>
  }
}
