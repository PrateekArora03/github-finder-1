import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

class App extends Component {

  render () {

      return (
      <Fragment>
        <div className="App">
          <Navbar />
        </div>
      </Fragment>
    );
  }
}

export default App;
