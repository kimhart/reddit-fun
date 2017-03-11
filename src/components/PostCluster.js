import React from 'react';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';

class PostCluster extends React.Component {

  getTimeStamp = () => {
    let date = new Date(this.props.created_utc);
    let stamp = date.toString("MMM dd"); 
    console.log(stamp);
    // timeStamp.toString();
    // let difference = today - timeStamp;
    // let seconds = (difference * 1000)
    // let hour = seconds * 3600;
    // console.log(timeStamp)
  }

  render() {
    let { author, created_utc, num_comments, permalink, score, subreddit, thumbnail, title, url } = this.props;
    let query = { author, created_utc, num_comments, permalink, score, subreddit, thumbnail, title, url };
    return (
      <div className="post-cluster">
        <div className="image">
          <img className="thumbnail" src={thumbnail} alt={subreddit} />
        </div>
        <div className="description">
          <Link to={{ pathname: `${url}`, query}}>
            <p className="post-title">{title}</p>
          </Link>
          <p className="post-info">submitted {this.getTimeStamp()} hours ago by <span className="post-author">{author}</span></p>
          <p className="post-comments">{num_comments.toLocaleString()} comments</p>
        </div>
      </div>
    );
  }
}

export default PostCluster;