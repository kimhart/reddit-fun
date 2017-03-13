import React from 'react';

class PostPage extends React.Component {

  render() {
    const { author, created_utc, num_comments, permalink, score, subreddit, thumbnail, title, url } = this.props.location.query;
    return (
      <div className="main">
        <div className="post-page">
          <h1>{title}</h1>
          <h3>Posted by: {author}</h3>
          <a className="comments" target="_blank" href={`https://reddit.com${permalink}`}>Comments</a>
          <img className="post-photo" src={url} alt={title} />
        </div>
      </div>
    );
  }
}

export default PostPage;