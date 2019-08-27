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

    this.setState({ loading: true });
    const res= await axios.get('https://api.github.com/users');
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
