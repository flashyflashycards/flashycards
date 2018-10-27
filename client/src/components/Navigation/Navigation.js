import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import EditButton from './components/EditButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Logo from '../Logo';

import './styles/Navigation.scss';

const styles = {
  paper: {
    root: {
      background: '#334955'
    }
  }
};

class Navigation extends Component {
  render() {
    const { classes, container, mobileOpen, onDrawerToggle, children } = this.props;

    const contents = <div className="app-navigation__drawer">
      <Toolbar />
      <Logo />
      <EditButton />
    </div>;

    return <React.Fragment>
      <CssBaseline />
      <nav className="app-navigation">
        {/* The implementation can be swap with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            classes={{ paper: classes.paper }}
            PaperProps={{ classes: { root: classes.root } }}
            open={mobileOpen}
            onClose={onDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {contents}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            open
          >
            {contents}
          </Drawer>
        </Hidden>
      </nav>
      <main className="app-navigation__main">
        <div className="row">
          {children}
        </div>
      </main>
    </React.Fragment>
  }
}

export default withStyles(styles)(Navigation);

Navigation.propTypes = {
  mobileOpen: PropTypes.bool,
  onDrawerToggle: PropTypes.func,
  children: PropTypes.node,
  container: PropTypes.any
}
