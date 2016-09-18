import React from 'react';
import { Router, Route, browserHistory,IndexRoute,hashHistory } from 'react-router';

import App from './App';
import About from './About';
import Work from './Work';
import Home from './Home';
import Blog from './Blog';

class Routers extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/blog/:title" component={Blog} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
