import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';
import Template from './components/Template';
import Home from './components/Home';
import SubredditPage from './components/SubredditPage';
import NotFound from './components/NotFound';

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={Home} />
          <Route path="/r/:display_name" component={SubredditPage} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
