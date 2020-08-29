import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import Navbar from '../components/pages/Navbar/Navbar';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <h2>BIRB WATCHER</h2>
        <Navbar />
        <Auth />
      </div>
    );
  }
}

export default App;
