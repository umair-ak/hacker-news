import React from 'react'
import {Link} from "react-router-dom";

export default function Item(props) {  

  const itemurl = "/item/" + props.objID;

  return (

    <Link to={itemurl}>
    <h3>{props.title}</h3>
    <p>author: {props.author}</p>
    <p>points: {props.points}</p>
    </Link>
  
  )
}
