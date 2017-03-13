import React from 'react';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';

class SubredditCluster extends React.Component {

  render() {
    let { display_name, public_description, subscribers, title, url } = this.props;
    let query = { display_name, public_description, subscribers, title, url };

    return (
      <div className="subreddit-cluster">
        <p className="subreddit-title"><Link to={{ pathname: `r/${display_name}`, query}}>{title}</Link></p>
        <p className="subreddit-description">{public_description}</p>
        <p className="subreddit-subs">{subscribers.toLocaleString()} subscribers</p>
      </div>
    );
  }
}

export default SubredditCluster;