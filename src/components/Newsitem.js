import React from 'react'

const  NewsItem = (props)=> {
    
        let {title,description,imageUrl,newsurl,publishedAt,name}= props
        return (
          <div className='my-3'>
            <div className="card" >
                <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"}
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text marg"> <small className='text-muted'> {`Date of publish : ${new Date(publishedAt).toGMTString()}`}</small> </p>
                    <p className="card-text"> <small className='text-muted'> {`Source : ${name}`}</small> </p>
                    <a href={newsurl} target='_main' className="btn btn-dark">Read More</a>
                </div>
            </div>
          </div>
        )
    }
    export default NewsItem;
    