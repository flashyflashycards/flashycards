import React, { Component } from 'react';
// import Header from './components/Header';
import './styles/LoginPage.css'; 



class LoginPage extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        error: '',
      };
  
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.dismissError = this.dismissError.bind(this);
    }
  
    dismissError() {
      this.setState({ error: '' });
    }
  
    handleSubmit(evt) {
      evt.preventDefault();
  
      if (!this.state.username) {
        return this.setState({ error: 'Username is required' });
      }
  
      if (!this.state.password) {
        return this.setState({ error: 'Password is required' });
      }
  
      return this.setState({ error: '' });
    }
  
    handleUserChange(evt) {
      this.setState({
        username: evt.target.value,
      });
    };
  
    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }
  
    render() {
  
      return (
        <div> 
        {/* Stand in Code */}
        <nav>
            <ul>
                <li><a href="/auth/logout">Logout</a></li>
                <li><a href="/auth/login">Login</a></li>
                <li><a href="/">Homepage</a></li>
            </ul>
        </nav>
        {/* Stand in Code */}
        <header>
            <h1>Login using...</h1>
        </header>
        <main>
            <a class="google-btn" href="/auth/google">Google+</a>
        </main>

        </div>
      );
    }
  }
  
  export default LoginPage;