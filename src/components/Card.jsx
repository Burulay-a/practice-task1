import React from "react";
import './Cards.css'

const Card = (props) => {
    return (
      <div className='card'  >
        <img src={props.img} className="image" />
        {props.id}
        {props.name}
  
        <p>About</p>
        {props.info}
        <p>WEB</p>
        <p>Twitter</p>
      </div>
    )
  }
  
  export default Card