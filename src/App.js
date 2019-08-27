import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // search Github users
  searchUsers = async text => {
    this.setState({
      loading: true
    });
    
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items,
      loading: false
    });
  }

  // clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  // set alert when form is submitted without any text
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    });

    // remove alert after 5000 ms
    setTimeout(() => (
      this.setState({
        alert: null
      })
    ), 5000);
  }


  render () {
    console.log("rndr-app");

    const { users, loading } = this.state;

    return (
      <Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ users.length > 0 ? true : false } setAlert={this.setAlert} />
            <Users loading={loading} users={users} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
