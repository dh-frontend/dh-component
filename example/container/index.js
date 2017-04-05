import React, { Component } from 'react'  
import { browserHistory, Router } from 'react-router';
import Layout from './layout';
import Home from './home';
import config from './config';

const childRoutes = ((args) => {
  return args.map(item => {
    return {
      path: item.name,
      component: require("../component/" + item.name + "_test").default
    }
  })
})(config);

const routes = {  
  path: '/',
  component: Layout,
  indexRoute: {
    component: Home
  },
  childRoutes,
}
export default class App extends Component {  
  render () {
    return <Router history={browserHistory} routes={routes} />
  }
}