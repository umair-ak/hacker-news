import React,{useState} from 'react'
import "./Search.css";


export default function Search(props) {



    let [query,setquery] = useState("");
    function handleChange(event){
        setquery(event.target.value);
    }

    async function handleSubmit (event) {
        event.preventDefault();
        props.sq(query);
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
