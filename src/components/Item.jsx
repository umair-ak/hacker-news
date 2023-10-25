import React from 'react'
import {Link} from "react-router-dom";
import "./Item.css";

export default function Item(props) {  

  const itemurl = "/item/" + props.objID;

  return (
    (props.title===undefined) ? null :
    <div className='news'>
    <Link to={itemurl}><h3>{props.title}</h3></Link>
    <span><b>author: </b>{props.author}</span>
    <span><b>points:</b> {props.points}</span>
    </div>
  
  )
}
