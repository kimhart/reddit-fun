import React from 'react';
import PostCluster from './PostCluster';

class SubredditPage extends React.Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      posts: [],
      interval: null
    }
  }

  componentDidMount() {
    this.getData();
    let interval = setInterval(() => {this.getData()}, 60 * 1000);
    this.setState({interval}) 
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  getData() {
    let _this = this;
    let url = this.props ? this.props.location.query.url : null;
    fetch(`http://www.reddit.com/${url}.json`).then(function(response) { 
      return response.json();
    }).then(function(j) {
      let posts = j.data ? j.data.children.map(obj => obj.data) : null;
      _this.setState({ posts });
      return posts
    })
  }

  render() {
    let { title } = this.props.location.query;
    return (
      <div className="main">
        <h1>{title}</h1>
        <div className="posts">
          {this.state.posts.slice(0, 25).map((post) => <PostCluster key={post.id} {...post} /> )}
        </div>
      </div>
    );
  }
}

export default SubredditPage;