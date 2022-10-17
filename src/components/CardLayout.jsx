
import React from "react";
import "./CardLayout.css"



function CardLayout(props) {
    const wall = props.className + " layout";
    return <div className={wall} style={{backgroundColor: props.wallpaper}} >
        {props.children} 
        </div>;
}
export default CardLayout;