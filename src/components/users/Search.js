import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  }

  onChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    // passing the props upward
    this.props.searchUsers(this.state.text);
    // resetting the state
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit} >
          <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
}

export default Search
