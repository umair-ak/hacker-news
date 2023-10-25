import React,{useState} from 'react'
import "./Search.css";
import {useNavigate} from "react-router-dom";


export default function Search(props) {


    let navigate = useNavigate();
    let [query,setquery] = useState("");
    function handleChange(event){
        setquery(event.target.value);
    }

    async function handleSubmit (event) {
        event.preventDefault();
        props.sq(query);
        navigate("/");
    }

  return (
    <div>
        <form className="container form" onSubmit={handleSubmit}>
            <input id="inp" type="text" onChange={handleChange} placeholder="Search News" value={query}/>
            <button type="submit">Search</button>
        </form>
        
    </div>
    )
}
