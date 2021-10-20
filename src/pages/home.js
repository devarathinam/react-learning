import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import axios from "axios";

class Home extends Component{


  listUser(){
    const url = "http://localhost:8080/api/user/list";

    axios.get(url)
    .then((response) => {
      console.log(response)

    })
    .catch((error) => {
      console.log(error)

    })
   
  }

  render(){
    return(
      <div>
        <h1>This is a HOME PAGE</h1>
        <NavLink to="/about-us">About Page</NavLink>
        <br/>
        <NavLink to="/login">Login Page</NavLink>
        <br/>
        <NavLink to="/product">Products</NavLink>
        <br/>
        <NavLink to="/contact">Contact</NavLink>
        <br/>
        <NavLink to="/mail">Go to Mail Page  </NavLink>
        <button onClick={() => this.listUser()}>List the User Profile</button>
      </div>
    )
  }
}

export default Home;  