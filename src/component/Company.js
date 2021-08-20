import React from 'react';
import { Employee } from './Employee';
import './Home.css';

const Company = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="Home-container">
    <label>
        Company
    </label>
      <input className="form-control"
        style={{ margin:'0 auto', width:'50%' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <Employee value={value} setValue={setValue} />
    </div>
  );
};

export default Company;