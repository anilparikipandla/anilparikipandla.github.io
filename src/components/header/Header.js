import React from 'react';
import classes from './Header.module.css';
import { FaBackward, FaForward } from 'react-icons/fa';
const Header = (props) => {
  return (
    <div className={`${classes.header} ${props.className}`}>
      <div className={classes.title}>
        <div className={classes.navigateButton}>
          <FaBackward className={classes.navigate}>Prev</FaBackward>
        </div>
        <div className={classes.currentDate}>Today</div>
        <div className={classes.navigateButton}>
          <FaForward className={classes.navigate}>Next</FaForward>
        </div>
      </div>
    </div>
  );
};

export default Header;
