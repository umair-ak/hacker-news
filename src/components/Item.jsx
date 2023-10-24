import React from 'react'

export default function Item(props) {
  return (
    <div>
            <h3>{props.title}</h3>
            <p>author: {props.author}</p>
            <p>points: {props.points}</p>
    </div>
  )
}
