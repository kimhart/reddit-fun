import React from 'react';
import { Link } from 'react-router';

class PostPage extends React.Component {

  render() {
    const { author, created_utc, num_comments, permalink, post_hint, score, subreddit, title, url } = this.props.location.query;
    return (
      <div className="main">
        <h1>{subreddit}</h1>
        <div className="post-page">
          <h2>{title}</h2>
          <h3>Posted by: {author}</h3>
          <p><a className="comments" target="_blank" href={`https://reddit.com${permalink}`}>Comments</a></p>
          <img className="post-photo" src={url} alt={title} />
          <p><a target="_blank" href={`https://reddit.com${url}`}>Go to the source!</a></p>
        </div>
      </div>
    );
  }
}

export default PostPage;