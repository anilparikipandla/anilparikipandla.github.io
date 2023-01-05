import React, {Fragment} from "react";
import classes from "./BackgroundGrid.module.css";
import Card from "./Card";

const numberOfHours = 24;

const BackgroundGrid = (props) => {
return <Fragment>
            <div className={classes.hours}>
                {
                    <Fragment>
                        {
                            Array(numberOfHours)
                                .fill(0)
                                .map((ele, index) => <div className={classes.hourlabel}>{`${index+1}:00`}</div>)
                        }
                    </Fragment>
                }
            </div>
            <div className={classes.box}>
                <Row>Red</Row>
                <Row>Green</Row>
                <Row>Blue</Row>
            </div>
        </Fragment>
};

const Row = props =>{
    return <div className={classes.column}>
        {Array(numberOfHours).fill(
            <div className={classes.row}></div>)
        }
    </div>
}
export default BackgroundGrid
