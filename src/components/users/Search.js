import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, setAlert, searchUsers }) => {
  const [text, setText] = useState('');

  const onChange = ({ target: { value }}) => {
    setText(value);
  }

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      // passing the props upward
      searchUsers(text);
      // resetting the state
      setText('');
    };
  }


  return (
    <div>
      <form className="form" onSubmit={onSubmit} >
        <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      { 
        showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )
      }
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
