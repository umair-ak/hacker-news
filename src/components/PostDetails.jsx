import React from 'react'
import { useParams } from 'react-router-dom';


export default function PostDetails() {
    const {itemId} = useParams();
    console.log(itemId);
  return (

    <div>make the items api call here</div>
  )
}
