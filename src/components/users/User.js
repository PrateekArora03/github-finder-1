import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner'


class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  } 

  render() {
    const { user: { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable }, loading } = this.props;

    return (
      <div>
        {
          loading 
            ? <Spinner /> 
            : (
              <Fragment>
                <h1>{name}</h1>
                <p>{location}</p>
                <p>{bio}</p>
                <p>{blog}</p>
                <p>{hireable}</p>
              </Fragment>
            )
        }
      </div>
    )
  }
}

export default User
