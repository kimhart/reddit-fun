import React from 'react';
import Post from './PostCluster';

class SubredditPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let _this = this;
    fetch(`http://www.reddit.com${this.props.location.query.url}.json`).then(function(response) { 
      return response.json();
    }).then(function(j) {
      let posts = j.data.children.map(obj => obj.data);
      console.log(posts);
      _this.setState({ posts });
    })
  }

  render() {
    let { title } = this.props.location.query;
    return (
      <div className="main">
        <h1>{title}</h1>
        <div className="posts">
          {this.state.posts.map((post) => <Post key={post.id} {...post} /> )}
        </div>
      </div>
    );
  }
}

export default SubredditPage;