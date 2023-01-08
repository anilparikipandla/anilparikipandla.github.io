import React, {useContext, useState} from "react";
import {Calendar} from "react-calendar";
import classes from "./Calendar.module.css";
import {Context} from "../../store/Context";
const MyCalendar = (props) => {
    const {date, setDate} = useContext(Context);
  return <div className={classes.calBox}>
    <Calendar onChange={setDate} value={date}/>
  </div>
}

export default MyCalendar;
