import React from 'react';
import classes from '../styles/bell.scss';

const BellItem = ({ name, description, price }) => {
  return (
    <div className={classes.bellWrapper}>
      <div className={classes.bell}>
        <div className="anchor material-icons layer-1">notifications_active</div>
        <div className="anchor material-icons layer-2">notifications</div>
        <div className="anchor material-icons layer-3">notifications</div>
      </div>
    </div>
  );
};

export default BellItem;