import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem';
const News= (props)=> {
   
   const[articles,setArticles]=useState([]);
   const[loading,setLoading] =useState(true);
   const[totalresults,setTotalresults]=useState(0);
   const[page,setPage]=useState(1);
  

   const updateNews= async ()=>{
     props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
    setLoading(true);
    let data= await fetch(url);
    props.setProgress(30);
   let prasedData=  await data.json();
   props.setProgress(70);
     setArticles(prasedData.articles);
     setTotalresults(prasedData.totalresults);
     setLoading(false);
     props.setProgress(100);
   }
   function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
const handleOnclick = async () => {   
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1) 
  let data = await fetch(url);
  let parsedData = await data.json()
  setArticles(articles.concat(parsedData.articles))
  setTotalresults(parsedData.totalResults)
};
  
   useEffect(()=>{
    document.title=`${capitalizeFirstLetter(props.category)}-Newsapp`;
     updateNews();

   },[]);


  return (
    <> 
    
      <h1 className='text-center text-purple-800 text-3xl my-4'> Newsapp { capitalizeFirstLetter(props.category)} Headings</h1>
      
                <div className="flex flex-wrap justify-center">
                    {
                        articles.map((element)=>{
                         return (  <div className=" m-4" key={element.url}>
                             <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                           </div>
                           )
                        })
                    }
            
           
           
            </div>
            <button className=" text-white p-2 hover:bg-slate-500 bg-fuchsia-500 float-end mx-40  mb-10 rounded-sm " onClick={handleOnclick}> Next</button>
            
       
    </>
  )
}
News.defaultprops={
    country:'in',
    pageSize:8,
    category:'general',

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;