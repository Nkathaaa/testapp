
import {Switch,Link}from "react-router-dom"
import Home from "./components/Home/home"
import { Route } from 'react-router';

import React, { Component } from 'react';
import Questions from "./hoc/Questions/questions"

class Routes extends Component {
  render(){
     return (
  
            <Switch>
            
              <Route path="/" exact component={Home}></Route>
              <Route path="/Questions" exact component={Questions}></Route>
             
            
              
            </Switch>
    
    )
     }
}
export default Routes;