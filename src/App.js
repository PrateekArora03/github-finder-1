import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/Useritem';
import './App.css';

class App extends Component {

  render () {

      return (
      <Fragment>
        <div className="App">
          <Navbar />
          <UserItem />
        </div>
      </Fragment>
    );
  }
}

export default App;
