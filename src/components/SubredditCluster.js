import React from 'react';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';

class SubredditCluster extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { title, thumbnail, permalink } = this.props;
    let query = { title, thumbnail, permalink };
    return (
      <Link to={{ pathname: `/r/${title}`, query}}>
        <div className="subreddit-cluster">
          <img className="subreddit-thumbnail" alt={`${title} Thumbnail`} src={thumbnail} />
          <p className="subreddit-title">{title}</p>
        </div>
      </Link>
    );
  }
}

export default SubredditCluster;