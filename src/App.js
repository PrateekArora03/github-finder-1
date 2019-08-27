import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    console.log("cdm-app");
    console.log("client_id ", process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({ loading: true });
    const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log("data ", res.data);
    this.setState({
      users: res.data,
      loading: false
    })
  };

  render () {
    console.log("rndr-app");

    const { users, loading } = this.state;

    return (
      <Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Users loading={loading} users={users} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
