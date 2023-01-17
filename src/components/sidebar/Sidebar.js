import React, { useContext, useState } from 'react';
import classes from './Sidebar.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiMenu } from 'react-icons/tfi';
import MyCalendar from '../calendar/calendar';
import { Context } from '../../store/Context';
const Sidebar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarClickHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { modal } = useContext(Context);
  const [showCreateModal, setShowCreateModal] = modal;
  const toggleModalHandler = () => {
    console.log('create key pressed');
    console.log(showCreateModal);
    return setShowCreateModal(!showCreateModal);
  };
  return (
    <div className={sidebarOpen ? classes.sidebarOpen : classes.sidebarClose}>
      <header
        className={
          sidebarOpen ? classes.sidebarHeader : classes.sidebarHeaderClose
        }
      >
        {sidebarOpen && <div>Personal Project</div>}
        <TfiMenu
          size={25}
          className={classes.hamBurger}
          onClick={sidebarClickHandler}
        />
      </header>
      {sidebarOpen && <div className={classes.sidebarData}>Hello, Anil!</div>}
      {sidebarOpen && (
        <div className={classes.sidebarButtonArea}>
          <button
            type='submit'
            className={classes.sidebarButton}
            onClick={toggleModalHandler}
          >
            Create +
          </button>
        </div>
      )}
      {sidebarOpen && <MyCalendar />}
    </div>
  );
};

export default Sidebar;
