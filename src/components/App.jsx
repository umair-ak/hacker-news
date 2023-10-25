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

    <BrowserRouter>
    <Routes>
    
        <Route path="/" element={
          <div>
          <Search sq={handlequery} />
          <ListofSearch query={query} />
        </div>} 
          />
          
        <Route path="/item/:itemId" element={
          <div>
          <Search sq={handlequery} />
          <PostDetails />
          </div>
        }
        />
        </Routes>
    </BrowserRouter>


    </div>
  )
}
