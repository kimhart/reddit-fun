import React from 'react';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';

class PostCluster extends React.Component {

  render() {
    let { author, created, num_comments, permalink, score, subreddit, thumbnail, title, url } = this.props;
    let query = { author, created, num_comments, permalink, score, subreddit, thumbnail, title, url };
    
    return (
      <div className="post-cluster">
        <div className="image">
          <img className="thumbnail" src={thumbnail} alt={subreddit} />
        </div>
        <div className="description">
          <Link to={{ pathname: `${url}`, query}}>
            <p className="post-title">{title}</p>
          </Link>
          <p className="post-info">submitted {created} hours ago by <span className="post-author">{author}</span></p>
          <p className="post-subs">{num_comments.toLocaleString()} comments</p>
        </div>
      </div>
    );
  }
}

export default PostCluster;