import '../UI/Card.css';
import React from "react";

const Card = (props) =>{
    const classes = props.className;

    return <div className={classes}>{props.children}</div>
   
}

export default Card;