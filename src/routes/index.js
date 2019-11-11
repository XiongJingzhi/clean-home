import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import HomeLayout  from "@/layouts/HomeLayout"
import News from  '@/pages/news'
import NewsDetail from  '@/pages/news/detail'
import Service from '@/pages/service'
import ServiceDetail from '@/pages/service/detail'
import Consult from '@/pages/consult'
import NotFound from '@/pages/notfound'

export default class RouteConfig extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={HomeLayout} />
          <Route path="/profile" exact component={HomeLayout} />
          <Route path="/news" exact component={News} />
          <Route path="/news/:detail" component={NewsDetail} />
          <Route path="/service" exact component={Service} />
          <Route path="/service/:detail" component={ServiceDetail} />
          <Route path="/consult" component={Consult} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}