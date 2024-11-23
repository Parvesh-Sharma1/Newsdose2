import React, { useEffect, useState } from 'react'
import Spinner from './spinner.js';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './Newsitem.js';

const News =(props)=> {
 const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  
  const theNews =async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`

    setLoading(true)
    let data = await fetch(url)
    let parseddata = await data.json()
    setArticles(parseddata.articles)
    setLoading(false)
    setTotalResults(parseddata.totalResults)
  }
  
  useEffect(()=>{
    document.title = `News-Dose - ${capitalize(props.category)}`;
    theNews()
    // eslint-disable-next-line
    },[]) 

   const fetchMoreData= async ()=>{
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`
     setLoading(true)
     let data = await fetch(url)
     let parseddata = await data.json()
      setPage(page + 1)
      setArticles(articles.concat(parseddata.articles))
      setLoading(false)
      setTotalResults(parseddata.totalResults)
       }
    return (
      <div className='container my-3 '>
        <h1 className='text-center' style ={{margin : ` 90px 0px 35px 0px`, textDecoration : "underline" }} > {`News Dose - Top ${capitalize(props.category)} Headlines`}</h1>
        {/* spinner */}
        {loading && <Spinner/>}
        {/* spinner */}
        <div className="container">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={loading && <Spinner/>}>
          <div className='container'>
            <div className='row'>
                {articles.map((element)=>{
                    return  <div className='col-md-4' key={element.url}>
                          <NewsItem  title={element.title} name ={element.source.name} publishedAt={element.publishedAt} description={element.description} imageUrl={element.urlToImage?element.urlToImage:""} newsurl={element.url}/> </div>})
                         
                }
            </div>
          </div>
          </InfiniteScroll>
        </div>
      </div>
    )
}
export default News;