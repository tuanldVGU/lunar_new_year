import React from 'react';
import BellItem from '../components/Bell';

const Welcome = ({ name, description, price }) => {
  return (
    <div className="wrapper">
      <BellItem/>
      <h1 className="title">You got an invitation</h1>
      <p className="description">Maybe it is about something <span className="text-red">BIG</span></p>
    </div>
  );
};

export default Welcome;
