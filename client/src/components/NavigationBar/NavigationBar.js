import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';

import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        return <AppBar position="sticky" color="primary">
            <Toolbar className="navigationBar">
                <Typography variant="h6" color="inherit">
                    Flash
                </Typography>
            </Toolbar>
        </AppBar>;
    }
}
