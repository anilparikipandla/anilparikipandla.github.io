import React, { Fragment, useContext } from 'react';
import classes from './BackgroundGrid.module.css';
import { Context } from '../../store/Context';

const numberOfHours = 24;

const BackgroundGrid = (props) => {
  const { date, modal } = useContext(Context);
  const [dateValue, setDateValue] = date;
  return (
    <div className={classes.grid}>
      <div className={classes.gridHeader}>
        <div className={classes.hours}>
          <div className={classes.hourlabel}></div>
        </div>
        <div className={classes.columns}>
          <div className={classes.gridHeaderDayCol}>
            <span className={classes.dayNumber}>{dateValue.getDate()}</span>
          </div>
          <div className={classes.gridHeaderDayCol}>
            <span className={classes.dayNumber}>{dateValue.getDate() + 1}</span>
          </div>
          <div className={classes.gridHeaderDayCol}>
            <span className={classes.dayNumber}>{dateValue.getDate() + 2}</span>
          </div>
        </div>
      </div>
      <div className={classes.gridBox}>
        <div className={classes.hours}>
          {
            <Fragment>
              {Array(numberOfHours)
                .fill(0)
                .map((ele, index) => (
                  <div className={classes.hourlabel}>{`${index + 1}:00`}</div>
                ))}
            </Fragment>
          }
        </div>
        <div className={classes.columns}>
          <Day />
          <Day />
          <Day />
        </div>
      </div>
    </div>
  );
};

const Day = (props) => {
  const { modal } = useContext(Context);
  const [showCreateModal, setShowCreateModal] = modal;
  const toggleModalHandler = (id) => {
    console.log('create key pressed: ' + id);
    return setShowCreateModal(!showCreateModal);
  };
  return (
    <div className={classes.day}>
      {Array(numberOfHours)
        .fill(0)
        .map((ele, index) => (
          <div
            id={index + 1}
            className={classes.row}
            onClick={(index) => {
              toggleModalHandler(index);
            }}
          ></div>
        ))}
    </div>
  );
};
export default BackgroundGrid;
