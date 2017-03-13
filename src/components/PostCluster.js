import React from 'react';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';

class PostCluster extends React.Component {

  getElapsedHours = () => {
    const seconds = this.props.created_utc;
    // convert seconds to date string relative to epoch time
    const epoch = new Date(1970, 0, 1);
    const timeStamp = new Date(epoch.setSeconds(seconds));
    // find time elapsed between post creation and now (in milliseconds)
    const now = new Date();
    const delta = timeStamp - now;
    // convert milliseconds to hours, add the time zone offset, round down.
    const currentTimeZoneOffsetInHours = now.getTimezoneOffset() / 60;
    const hoursElapsed = Math.floor(Math.abs((delta / 1000) / 3600) + currentTimeZoneOffsetInHours);
    // display appropriate language per # of hours/days
    if (hoursElapsed > 24) {
      if (hoursElapsed > 48) {
        const days = Math.floor(hoursElapsed / 24);
        return `${days} days`;
      } return `${days} day`;
    } else {
      if (hoursElapsed === 1) {
        return `${hoursElapsed} hour`;
      } else if (hoursElapsed < 1) {
        return 'less than 1 hour';
      } else {
        return `${hoursElapsed} hours`;
      }
    }
  }

  render() {
    let { author, created_utc, num_comments, permalink, score, subreddit, thumbnail, title, url } = this.props;
    let query = { author, created_utc, num_comments, permalink, score, subreddit, thumbnail, title, url };
    console.log(this.props);
    return (
      <div className="post-cluster">
        <div className="image">
          <Link to={{ pathname: `${permalink}`, query}}>
            <img className="thumbnail" src={thumbnail} alt={subreddit} />
          </Link>
        </div>
        <div className="description">
          <Link to={{ pathname: `${permalink}`, query}}>
            <p className="post-title">{title}</p>
          </Link>
          <p className="post-info">Submitted {this.getElapsedHours()} ago by <span className="post-author">{author}</span></p>
          <p className="post-comments">{num_comments.toLocaleString()} comments</p>
        </div>
      </div>
    );
  }
}

export default PostCluster;