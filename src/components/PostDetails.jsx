import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import "./PostDetails.css";
import Comment from "./Comment.jsx";
import axios from 'axios';


export default function PostDetails() {
    let [st,setSt] = useState();
    const {itemId} = useParams();
    let [show,setShow] = useState(10);
    

    function createComments(comment){
        return(
            
            <Comment 
            key={comment.id}
            author={comment.author}
            text={formater(comment.text)}
            reply={comment.children}
            />
           
            );
        }
        
    function formater(str) {
        
        str = str.replace(/<[^>]*>/g, '');
        var parser = new DOMParser();
        var dom = parser.parseFromString('<!doctype html><body>' + str, 'text/html');
        return dom.body.textContent;
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios("http://hn.algolia.com/api/v1/items/"+itemId);
            setSt(result.data);
        }
        fetchData();
    },[itemId]);
    
  return (
    <div className='postDetails'>
    <h2>{st?st.title:null}</h2>
    <p>
    <b>author : </b>{st?st.author:null}<b> points : </b>{st?st.points:null}
    </p>
    <div className='box'>
    <h3>Comments</h3>
    {st?st.children.slice(0,show).map(createComments):null}
    {!(show<3) && <button className="btn btn-primary btn-sm" onClick={()=>{(show<=3) ?setShow(3):setShow(show-3)}}>show less</button>}
    <button className="btn btn-primary btn-sm" onClick={()=>{setShow(show+4);}}>show more</button>
    </div>

    </div>
  )
}
