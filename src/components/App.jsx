import React,{useState} from 'react'
import Search from "./Search.jsx";
import ListofSearch from "./ListofSearch";
import PostDetails from './PostDetails.jsx';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  let [query,setquery] = useState("");
  
  function handlequery(q){
    setquery(q);
  }

  return (
    <div>
    <Search sq={handlequery} />
    

    <BrowserRouter>
        <Routes>
        <Route path="/" element={<ListofSearch query={query} />} />
        <Route path="/item/:itemId" element={<PostDetails />} />
        </Routes>
    </BrowserRouter>


    </div>
  )
}
