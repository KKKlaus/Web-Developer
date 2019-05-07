import React from 'react';

const formatUser = function(name) {
    return (
      <li key={name}>
          <span className="username">{name}</span>
      </li>
    );
};

const UsersList = ({ users }) => {
  return (
    <ul className="users">
    	{ Object.values(users).map( name => { return formatUser(name) } ) }
    </ul>
  );
};

export default UsersList;