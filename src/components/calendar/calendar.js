import React, { useContext } from 'react';
import { Calendar } from 'react-calendar';
import classes from './Calendar.module.css';
import { Context } from '../../store/Context';
const MyCalendar = (props) => {
  const { date } = useContext(Context);
  const [dateValue, setDateValue] = date;
  return (
    <div className={classes.calBox}>
      <Calendar onChange={setDateValue} value={dateValue} />
    </div>
  );
};

export default MyCalendar;
