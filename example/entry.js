/**
 *  index.js, the starter.
 *
 *  @author  wangjingbo
 *  @date    Apr 6, 2017
 *
 */
import './index.scss';
import '../src/index.scss';
import 'antd/dist/antd.less';
import config from './config.json';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
const rootEl = document.getElementById('root');
const childRoutes = ((json) =>{
  return Object.keys(json).map(k => (
    {
      path: k, 
      component: require("./" + k + "_test/index.js").default
    }
  ))
})(config);

const routes = {
  path: '/',
  component: require("./home/warpper.js").default,
  indexRoute: { component:require("./home/home.js").default },
  childRoutes
}

ReactDOM.render((<Router history={browserHistory} routes={routes} />), rootEl);

// function startUpRouter(routes) {
//   router = Router.create({
//     routes: routes,
//     location: Router.HistoryLocation
//   });
//   router.run(renderer);
//   return router;
// }

// const render = (Component) => {
// 	ReactDOM.render(
//       <Component/>,
//     	rootEl
//   	);
// };
//  render(App);

// // Hot Module Replacement API
// if (module.hot) {
// 	module.hot.accept('./container/index', () => {
// 		const NextApp = require('./container/index').default;
//     	render(NextApp)
//   	});
// }
