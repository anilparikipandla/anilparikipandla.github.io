import React from "react";
import classes from "./Header.module.css";
const Header = props => {
    return <div className={`${classes.header} ${props.className}`}>
        <button>Prev</button>
        <div>Today</div>
        <button>Next</button>
    </div>
};

export default Header;
