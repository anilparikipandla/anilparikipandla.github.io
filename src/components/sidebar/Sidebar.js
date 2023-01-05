import React, {useState} from "react";
import classes from "./Sidebar.module.css";
import {RxHamburgerMenu} from "react-icons/rx"
const Sidebar = (props) => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarClickHandler = () =>{
    setSidebarOpen(!sidebarOpen);
  }
  return <div className={sidebarOpen?classes.sidebarOpen:classes.sidebarClose}>
    <header className={sidebarOpen?classes.sidebarHeader:classes.sidebarHeaderClose}>
      {sidebarOpen && <div>Personal Project</div>}
      <RxHamburgerMenu onClick={sidebarClickHandler}/>
    </header>
    {sidebarOpen && <div className={classes.sidebarData}>Hello, Anil!</div>}
    {sidebarOpen && <div className={classes.sidebarButtonArea}>
      <button type="submit" className={classes.sidebarButton} onClick={sidebarClickHandler}>Create +</button>
    </div>}
  </div>
}

export default Sidebar;
