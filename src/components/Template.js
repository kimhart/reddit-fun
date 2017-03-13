import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';

class Template extends React.Component {

  render() {
    return (
      <div className="page-wrap">
        { this.props.children }
      </div>
    );
  }
}

export default Template;
