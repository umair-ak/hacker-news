import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';


export default function PostDetails() {
    let [st,setSt] = useState();
    const {itemId} = useParams();

    function createComments(comment){
        return(
            <div>
            <p>{formater(comment.text)}</p>
            {comment?comment.children.map(createComments):null}
            </div>
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
            console.log(result.data);
            setSt(result.data);
        }
        fetchData();
    },[]);
    
  return (
    <div>
    {st?st.author:null}
    {st?st.children.map(createComments):null}
    
    
    </div>
  )
}
