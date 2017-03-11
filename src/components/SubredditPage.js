import React from 'react';

class SubredditPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let _this = this;
    fetch(`http://www.reddit.com/${this.props.location.query.permalink}.json`).then(function(response) { 
      return response.json();
    }).then(function(j) {
      let posts = j.data.children.map(obj => obj.data);
      console.log(posts);
      _this.setState({ posts });
    })
  }

  render() {
    let {title, permalink, thumbnail } = this.props.location.query;
    return (
      <div className="main">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default SubredditPage;