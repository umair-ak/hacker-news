import React from 'react'

export default function Comment(props) {
  return (
    <div>
    <span><b>{props.author}</b> : </span>
    <span>{props.text}</span>
    </div>
        )
    }
    
    // {comment.children === undefined
    // ?<button onClick={()=>{setReply(1)}}>hide reply</button>
    // :<button onClick={()=>{setReply(reply+1)}}>view replies</button>}
    