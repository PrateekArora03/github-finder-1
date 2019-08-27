import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // search Github users
  searchUsers = async text => {
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items,
      loading: false
    });
  }

  render () {
    console.log("rndr-app");

    const { users, loading } = this.state;

    return (
      <Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Search searchUsers={this.searchUsers} />
            <Users loading={loading} users={users} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
