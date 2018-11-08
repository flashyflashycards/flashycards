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
import Logo from '../../components/Logo';

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

  scrollToFeatures() {
    document.getElementById('features').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
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
      <Header color="transparent" brand={<Logo />} fixed changeColorOnScroll={{ height: 400, color: 'white' }} rightLinks={<button type="button" className="landingPage__login" onClick={() => this.setState({ loginOpen: true })}>Login</button>} />
      <Parallax filter image={require('./assets/hero.jpg')}>
        <div className="landingPage__header">
          <div className="row">
            <div className="column landingPage__header__left">
              <h1 className="white landingPage__title">Flashy Cards</h1>
              <h2 className="landingPage__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada. Fusce tempor risus maximus pulvinar sagittis.</h2>
              <button onClick={() => this.scrollToFeatures()} className="landingPage__learnMore" type="button">Learn More</button>
            </div>
            <div className="column shrink">
              <img src={require('./assets/header.svg')} alt="" />
            </div>
          </div>
        </div>
      </Parallax>
      <div className="landingPage__main" id="features">
        <div className="row align-center">
          <div className="column medium-6 small-12">
            <h1>Amazing Features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor sit amet del malute.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="medium-4 small-12">
            <div className="landingPage__feature">
              <img src={require('./assets/feature_1.svg')} alt="" />
              <h2>Feature or Idea</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
            </div>
          </div>
          <div className="medium-4 small-12">
            <div className="landingPage__feature">
              <img src={require('./assets/feature_2.svg')} alt="" />
              <h2>Feature or Idea</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
            </div>
          </div>
          <div className="medium-4 small-12">
            <div className="landingPage__feature">
              <img src={require('./assets/feature_3.svg')} alt="" />
              <h2>Feature or Idea</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
            </div>
          </div>
        </div>

        <div className="landingPage__team">
          <div className="row">
            <div className="column text-center">
              <h1>Meat the Team</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor sit amet del malute.
          </p>
            </div>
          </div>
          <div className="row align-center">
            <div className="medium-4 small-12">
              <div className="landingPage__profile">
                <img src={require('./assets/profile_1.jpg')} alt="" />
                <h2>Asha</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
              </div>
            </div>
            <div className="medium-4 small-12">
              <div className="landingPage__profile">
                <img src={require('./assets/profile_2.jpg')} alt="" />
                <h2>Amyn</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
              </div>
            </div>
            <div className="medium-4 small-12">
              <div className="landingPage__profile">
                <img src={require('./assets/profile_3.jpg')} alt="" />
                <h2>Bryan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
              </div>
            </div>
            <div className="medium-4 small-12">
              <div className="landingPage__profile">
                <img src={require('./assets/profile_4.jpg')} alt="" />
                <h2>Eunji</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
              </div>
            </div>
            <div className="medium-4 small-12">
              <div className="landingPage__profile">
                <img src={require('./assets/profile_5.jpg')} alt="" />
                <h2>Ka Lun</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nulla bibendum nisl hendrerit malesuada fusce tempor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}
