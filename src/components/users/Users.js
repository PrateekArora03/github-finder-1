import React from 'react';
import UserItem from './Useritem';

const Users = (props) => {
  const { users, loading } = props;

  return (
    <div style={userStyle}>
      {
        loading ?
          <h4 className="text-center">loading...</h4> :
          users.map(user => (
            <UserItem key={user.id} user={user}/>
          ))
      }
    </div>
  )
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
}

export default Users;
