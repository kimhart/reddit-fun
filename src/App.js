import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';
import Template from './components/Template';

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={MainPage} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }

}

export default App;
