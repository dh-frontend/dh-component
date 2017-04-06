import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { AppContainer } from 'react-hot-loader';
import './index.scss';
import '../src/index.scss';
import 'antd/dist/antd.css';
import App from './container/index';

const rootEl = document.getElementById('root');

function startUpRouter(routes) {
  router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
  });
  router.run(renderer);
  return router;
}

const render = (Component) => {
	ReactDOM.render(
    	<AppContainer>
      		<Component/>
    	</AppContainer>,
    	rootEl
  	);
};

render(App);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./container/index', () => {
		const NextApp = require('./container/index').default;
    	render(NextApp)
  	});
}
