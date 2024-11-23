import React from 'react'
import {
  NavLink
} from "react-router-dom";

const Navbar = ()=> {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">News Dose</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink exact="true" className={(e)=>{return e.isActive?"nav-link font":"nav-link"} } to="/" aria-current="page">Home</NavLink></li>
            <li className="nav-item"><NavLink exact="true" className={(e)=>{return e.isActive?"nav-link font":"nav-link"} } to="/entertainment">Entertainment</NavLink></li>
            <li className="nav-item"><NavLink exact="true" className={(e)=>{return e.isActive?"nav-link font":"nav-link"} } to="/health">Health</NavLink></li>
            <li className="nav-item"><NavLink exact="true" className={(e)=>{return e.isActive?"nav-link font":"nav-link"} } to="/science">Science</NavLink></li>
            <li className="nav-item"><NavLink exact="true" className={(e)=>{return e.isActive?"nav-link font":"nav-link"} } to="/sports">Sports</NavLink></li>
            <li className="nav-item"><NavLink exact="true" className={(e)=>{return e.isActive?"nav-link font":"nav-link"} } to="/technology">Technology</NavLink></li>
            <li className="nav-item"><NavLink exact="true" className={(e)=>{return e.isActive?"nav-link font":"nav-link"} } to="/business">Business</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
}
export default Navbar;
