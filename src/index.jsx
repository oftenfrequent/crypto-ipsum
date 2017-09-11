
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import * as _ from 'lodash'
import 'babel-polyfill'
// import { applyRouterMiddleware, Router, hashHistory } from 'react-router'
// import useScroll from 'react-router-scroll'
// import initialState from './initialState'
// import configureStore from './configureStore'
// import appRoutes from './routes'

import Paragraphs from './paragraphs';

ReactDOM.render(
	<Paragraphs />,
  document.getElementById('app')
)
  // <Provider store={store}>
  //   <Router history={hashHistory}>
  //     {appRoutes()}
  //   </Router>
  // </Provider>,