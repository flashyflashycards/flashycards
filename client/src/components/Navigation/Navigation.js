import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Navigation.scss';

const styles = {
  paper: {
    root: {
      background: '#334955'
    }
  }
};

export default class Navigation extends Component {
  render() {
    const { controls, children, deckID, userID } = this.props;

    return <React.Fragment>
      <nav className="app-navigation">
        <div className="app-navigation__drawer">
          {controls}
        </div>
      </nav>
      <main className="app-navigation__main">
        <div className="row">
          {children}
        </div>
      </main>
    </React.Fragment>
  }
}

Navigation.propTypes = {
  mobileOpen: PropTypes.bool,
  onDrawerToggle: PropTypes.func,
  children: PropTypes.node,
  controls: PropTypes.any
}
