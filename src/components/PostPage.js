import React from 'react';

class PostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  // componentDidMount() {
  //   let _this = this;
  //   fetch(`http://www.reddit.com${this.props.location.query.permalink}.json`).then(function(response) { 
  //     return response.json();
  //   }).then(function(j) {
  //     let posts = j.data.children.map(obj => obj.data);
  //     console.log(posts);
  //     _this.setState({ posts });
  //   })
  // }

  render() {
    return (
      <div className="main">
        <h1>This is a post</h1>
      </div>
    );
  }
}

export default PostPage;