import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  onChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    
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
