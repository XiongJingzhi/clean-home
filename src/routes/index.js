import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from "@/pages/home"
import Profile from "@/pages/profile"


export default class RouteConfig extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}