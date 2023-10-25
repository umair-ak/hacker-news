import React,{useState,useEffect} from 'react';
import Item from "./Item.jsx";
import axios from 'axios';

export default function ListofSearch(props) {

    function createItem(obj){
        return(
            <Item 
            key = {obj.objectID}
            objID = {obj.objectID}
            title = {obj.title}
            url = {obj.url}
            author = {obj.author}
            points ={obj.points}
            />
        )
    }

    let [news,setNews] = useState([]);
    

    useEffect(() => {
      axios.get("http://hn.algolia.com/api/v1/search?query="+props.query).then((resp)=>{
        setNews(resp.data.hits);
        console.log(news);
      })

      return ()=>{
        setNews([]);
      }
    }, [props.query]);
    

  return (
    <div>
    {news.map(createItem)}
    </div>
    
  );
}
