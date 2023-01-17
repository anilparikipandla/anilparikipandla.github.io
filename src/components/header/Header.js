import React, { useContext } from 'react';
import classes from './Header.module.css';
import { FaBackward, FaForward } from 'react-icons/fa';
import { Context } from '../../store/Context';
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const d = new Date();
const addDays = (date, noOfDays) => {
  return new Date(new Date(date).setDate(date.getDate() + noOfDays));
};
const Header = (props) => {
  const { date, modal } = useContext(Context);
  const [dateValue, setDateValue] = date;

  const nextDayHandler = () => {
    setDateValue(addDays(dateValue, 1));
  };
  const prevDayHandler = () => {
    setDateValue(addDays(dateValue, -1));
  };

  return (
    <div className={`${classes.header} ${props.className}`}>
      <div className={classes.title}>
        <div className={classes.navigateButton}>
          <FaBackward className={classes.navigate} onClick={prevDayHandler}>
            Prev
          </FaBackward>
        </div>
        <div className={classes.currentDate}>
          {monthNames[dateValue.getMonth()] + ' ' + dateValue.getFullYear()}
        </div>
        <div className={classes.navigateButton} onClick={nextDayHandler}>
          <FaForward className={classes.navigate}>Next</FaForward>
        </div>
      </div>
    </div>
  );
};

export default Header;
