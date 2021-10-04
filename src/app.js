import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import Product from './pages/product';
import LoginPage from './pages/login-page';
import Mail from './pages/mail';
import RegisterPage from './pages/register';
 

/*class App extends Component{


    constructor(props){
        super(props);
        this.state =  {
            message : "This is a state message"
        }
    }


    display(){
        //console.log("Hello, Welcome to React")
        this.setState({message : "Hello welcome to the world"})
    }

    render(){
        return(
          <div>
            <h1>Hello! Welcome to React Learning</h1>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.display()}>Run the function</button>
            
          </div>
        )
      }
    


}*/

class App extends Component{

    render(){
      return(
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/about-us" component={AboutUs}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/mail" component={Mail}></Route>
            <Route path="/signin" component={RegisterPage}></Route>
          </Switch>
        </BrowserRouter>
      )
    }
  
  }
  

export default App;