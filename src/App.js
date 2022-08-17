import axios from 'axios';
import { useState } from 'react';

function App() {
  const [news, setNews] = useState([]);
  
  const fetchNews = ()=>{
    axios
    .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7937e49dddae44349cb1f0530e725120")
    .then(res=>{
      setNews(res.data.articles);
    })
  }

  
  return (
    <>
    <div className='container-fluid my-4'>
      <div className='col'>
        <button className='btn btn-primary' onClick={fetchNews}>fetchNews</button>
      </div>
    </div>
      <div className='container'>
        <div className='row'>
        {
          news.map((value)=>{
            return(
              <div className='col-4'>
                <div className="card" style={{width: '18rem'}}>
                  <img src={value.urlToImage} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-primary center">Explore</a>
                  </div>
                </div>
              </div>
          )
          })
        }
        </div>
      </div> 
    </>
  );
}

export default App;
