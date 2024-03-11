import React, {useState, useEffect} from "react";
import { getBusinessNews } from "../../API/getBusinessNews";
 
function Business(){
    const [news,setNews] = useEffect([]);
 
 
    useEffect(()=>{
        async function fetchData(){
            const result = await getBusinessNews()
            setNews(result.data.articles);
        }
        fetchData(){
            
        };
    },[]);
 
 
    return(
        <ul>
            {news.map(article => (
                <li key={article.title}>{article.title}</li>
            ))}
        </ul>
    );
}

export default Business;