import './App.css';
import React from 'react'
// import Navbar from './components/Navbar';
import News from './components/News';
import Layout from './components/layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const pagesize= 9;
const keys = process.env.REACT_APP_NEWS_API

const router = createBrowserRouter([

                          {
                            path: "/",
                            element: <Layout/>,
                            children : [
                              {path: "",
                               element : <div><News key={"Home"} api={keys} pageSize = {pagesize} country = {"us"} category ={"general"} /></div>
                              },
                              {path: "entertainment",
                               element : <div><News key={"entertainment"} api={keys} pageSize = {pagesize} country = {"us"} category ={"entertainment"} /></div>
                              },
                              {path: "health",
                               element : <div><News key={"health"} api={keys} pageSize = {pagesize} country = {"us"} category ={"health"} /></div>
                              },
                              {path: "science",
                               element : <div><News key={"science"} api={keys} pageSize = {pagesize} country = {"us"} category ={"science"} /></div>
                              },
                              {path: "sports",
                               element : <div><News key={"sports"} api={keys} pageSize = {pagesize} country = {"us"} category ={"sports"} /></div>
                              },
                              {path: "technology",
                               element : <div><News key={"technology"} api={keys} pageSize = {pagesize} country = {"us"} category ={"technology"} /></div>
                              },
                              {path: "business",
                               element : <div><News key={"business"} api={keys} pageSize = {pagesize} country = {"us"} category ={"business"} /></div>
                              },
                              
                            ]}
                          ]);
                         

const App = ()=> {
    return (
        <RouterProvider router={router}  />
    )
}

export default App;