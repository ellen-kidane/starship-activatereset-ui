import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import './App.css';

class App extends Component {
  env = 'dev';
  engineUrl = 'rallyengine.dev.werally.in';
  toolName = 'Activate Reset';
  menuItems = 'Logout';
  chromeRef = null;

  constructor(props) {
    super(props);
    this.chromeRef = React.createRef();
  }

  render() {
    const isLoggedIn = true;
    const userInfo = {
      username: 'test.user',
      email: 'test@rallyhealth.com'
    }

    return (
      isLoggedIn && (
        <sa-chrome
          ref={this.chromeRef}
          url={this.engineUrl}
          tool-name={this.toolName}
          env={this.env}
          username={userInfo.username}
          menu-items={this.menuItems}
        >
          <sa-toolbar-nav slot="main-nav">
            <sa-toolbar-item is-active="true">
              Reset Activate User
            </sa-toolbar-item>
          </sa-toolbar-nav>
          <main className="content">
            <Router>
              <Home path="/" />
            </Router>
          </main>
        </sa-chrome>
      )
    );
  }
}

export default App;
