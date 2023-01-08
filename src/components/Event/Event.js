import React from "react";
import classes from './Event.module.css';
import Card from "../ui/Card";

const Event = (props) => {
  return <Card className={classes.event}>
      This is a sample event
  </Card>
}
export default Event
