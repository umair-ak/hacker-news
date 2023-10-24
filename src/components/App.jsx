import React,{useState} from 'react'
import Search from "./Search.jsx";
import ListofSearch from "./ListofSearch";
import "./App.css";

export default function App() {
  let [query,setquery] = useState("");
  
  function handlequery(q){
    setquery(q);
  }

  return (
    <div>
    <Search sq={handlequery} />
    <ListofSearch query={query}/>
    </div>
  )
}
