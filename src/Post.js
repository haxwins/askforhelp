import React, { Component } from 'react';
import './post.css';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className={this.props.subject + ' subject'}>
          {this.props.subject}
        </div>
        <div className="title">
          <a href="#">{this.props.title}</a>
        </div>
      </div>
    );
  }

}
Post.defaultProps = {
  subject: "Other",
  title: "No title",
};
export default Post;
