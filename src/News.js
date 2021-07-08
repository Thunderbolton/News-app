import { useState } from "react";
import Categories from './Categories';
import Searchbar from "./Searchbar";

const News = () => {
    
    const apiKey = process.env.REACT_APP_API_KEY;

    const [data, setData] = useState([]);
    
    const apiFetch = (url) => {
            fetch(url)
                .then(res => {
                    return res.json();
                })
                .then((data) => {
                    setData(data.articles)
                })                      
    } 

    return (
        <div>
                <ul>
                <Searchbar data={data} apiKey={apiKey} apiFetch={apiFetch}/>
                <Categories data={data} apiKey={apiKey} apiFetch={apiFetch}/> 
                    {data.map(article => 
                    <li className="news-list" key={article.url}>
                    <a className="news-link" href={article.url}>{article.title}</a>
                        {/* <p>{article.source.id}</p>
                        <p>{article.urlToImage}</p> */}
                    </li>)}
                </ul> 
        </div>    
    )
}

 
export default News;