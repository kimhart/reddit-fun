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
    // convert milliseconds to hours, add the time zone offset (in hours), round down to whole number
    const currentTimeZoneOffsetInHours = now.getTimezoneOffset() / 60;
    const hoursElapsed = Math.floor(Math.abs((delta / 1000) / 3600) + currentTimeZoneOffsetInHours);
    // display appropriate language per # of hours/days
    if (hoursElapsed > 24) {
      const days = Math.floor(hoursElapsed / 24);
      if (hoursElapsed > 48) {
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
    const { author, created_utc, id, num_comments, permalink, score, subreddit, thumbnail, title, url } = this.props;
    const query = { author, created_utc, num_comments, permalink, score, title, url };
    return (
      <div className="post-cluster">
        <div className="score">
        <p>⬆️</p>
        <p className="post-score">{score}</p>
        <p>⬇️</p>
        </div>
        <div className="image">
          <Link to={{ pathname: `/${id}`, query}}>
            <img className="thumbnail" src={thumbnail} alt={subreddit} />
          </Link>
        </div>
        <div className="description">
          <Link to={{ pathname: `/${id}`, query}}>
            <p className="post-title">{title}</p>
          </Link>
          <p className="post-info">Submitted {this.getElapsedHours()} ago by <span className="post-author">{author}</span></p>
          <p className="post-comments"><a className="comments" target="_blank" href={`https://reddit.com${permalink}`}>{num_comments.toLocaleString()} comments</a></p>
        </div>
      </div>
    );
  }
}

export default PostCluster;