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
  toggle = () =>{
    this.setState({postOpen: !this.state.postOpen});
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    let comment = document.getElementById('comment').value;
    let url = 'http://localhost:3000/comment' + '/' + this.props.id + '/' + comment;
    fetch(url, {method: 'post'});
    document.getElementById("comment").value = "Wysłano!";
  }
  showPost = () =>{
    if(this.state.postOpen){
      return (
        <div className="postInside">
          <div>{this.props.post}</div>
          <div>{this.props.comments.map((v)=>{return <div className="comment">{v}</div>})}</div>
		      <form>
			       <textarea id="comment" placeholder="Dodaj odpowiedz..." rows="10" cols="30"/>
             <button id="z" className="addComm" onClick={(e)=>{this.handleSubmit(e)}}>Dodaj odpowiedz</button>
		      </form>
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
  _id: "",
  subject: "Other",
  title: "No title",
  post: "Empty",
  comments: [],
};
export default Post;
