import React from 'react'
import "./Search.css";

export default function Search() {
  return (
    <div>
        <form className="container form">
            <input type="text" placeholder="Search News"/>
            <button type="submit">Search</button>
        </form>
    </div>
    )
}
