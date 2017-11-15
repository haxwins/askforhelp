import React, { Component } from 'react';
import './post.css';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      postOpen: false,
    }
  }
  componentWillReceiveProps(){
    this.setState({postOpen: false})
  }
  toggle(){
    if(this.state.postOpen){
      this.setState({postOpen: false})
    }
    else{
      this.setState({postOpen: true})
    }
  }
  showPost(){
    if(this.state.postOpen){
      console.log(this.props);
      return (
        <div className="postInside">
          <div>{this.props.post}</div>
          <div>{this.props.comments.map((v)=>{return <div className="comment">{v}</div>})}</div>
          <textarea placeholder="Dodaj odpowiedz..." rows="10" cols="30">
          </textarea>
          <div className="addComm">Dodaj odpowiedz</div>
        </div>
      )
    }
    else{
      return <div></div>
    }
  }
  render() {
    return (
      <div>
        <div className="post">
          <div className={this.props.subject + ' subject'}>
            {this.props.subject}
            </div>
          <div className="title" onClick={()=>{this.toggle()}}>
            <div>{this.props.title}</div>
          </div>
        </div>
        {this.showPost()}
      </div>
    );
  }

}
Post.defaultProps = {
  subject: "Other",
  title: "No title",
  post: "Empty",
  comments: [],
};
export default Post;
