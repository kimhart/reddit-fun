import React from 'react';
import SubredditCluster from './SubredditCluster';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subreddits: []
    }
  }

  componentDidMount() {
    let _this = this;
    fetch('https://www.reddit.com/subreddits/.json').then(function(response) { 
      return response.json();
    }).then(function(j) {
      let subreddits = j.data.children.map(obj => obj.data);
      _this.setState({ subreddits });
    })
  }

  render() {
    return (
      <div className="main">
        <h1 className="page-title">Reddit Lite</h1>
        <div className="subreddits">
          {this.state.subreddits.map((subreddit) => <SubredditCluster key={subreddit.id} {...subreddit} /> )}
        </div>
      </div>
    );
  }
}

export default Home;