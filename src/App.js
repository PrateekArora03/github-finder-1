import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {

  render () {
      console.log("app render")

      return (
      <Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Users />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
