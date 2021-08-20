import React, { useEffect, useState } from 'react';
import './User.css'

const Card = ({ user }) => {
  return (
    <div style={{ border: '1px solid black'}}>
      <h1 style={{ fontSize:'20'}}>{user.employee_name}</h1>
    </div>
  );
};

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((r) => r.json())
      .then((r) => setUsers(r.data));
  }, []);

  return (
    <div>
      <h1 style={{fontSize:'42px'}}>User</h1>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default User