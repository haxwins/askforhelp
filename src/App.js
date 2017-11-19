import React, { Component } from 'react';
import Post from './Post.js'
import './app.css';
import arr_posts from './data.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      postsAll: arr_posts,
      postsCurrent: arr_posts,
    }
  }
  filter(key){
    if(key === "All"){
      this.setState({postsCurrent: this.state.postsAll});
    }
    else{
      let newarr=[];
      arr_posts.map((v)=>{
        if(v.subject === key){
          return newarr = [...newarr,v];
        }
      })
      this.setState({postsCurrent: newarr});
    }
  }
  search(value){
    value = value.toLowerCase();
    let newarr=[];
    arr_posts.map((v)=>{
      if(v.title.toLowerCase().includes(value)===true){
        return newarr = [...newarr,v];
      }
    })
    this.setState({postsCurrent: newarr});
  }
  render() {
    return (
      <div>
        <div id="input">
          <input placeholder="Szukaj..." onChange={(e)=>this.search(e.target.value)}></input>
        </div>
        <div id="nav">
          <div className="nav-Inne" onClick={()=>{this.filter("All")}}>&#10227;</div>
          <div className="nav-Mat" onClick={()=>{this.filter("Mat")}}>Matematyka</div>
          <div className="nav-Pol" onClick={()=>{this.filter("Pol")}}>Polski</div>
          <div className="nav-His" onClick={()=>{this.filter("His")}}>Historia</div>
          <div className="nav-Fiz" onClick={()=>{this.filter("Fiz")}}>Fizyka</div>
          <div className="nav-Chem" onClick={()=>{this.filter("Chem")}}>Chemia</div>
          <div className="nav-Geo" onClick={()=>{this.filter("Geo")}}>Geografia</div>
          <div className="nav-Bio" onClick={()=>{this.filter("Bio")}}>Biologia</div>
          <div className="nav-Ang" onClick={()=>{this.filter("Ang")}}>Angielski</div>
          <div className="nav-Inne" onClick={()=>{this.filter("Inne")}}>Inne</div>
        </div>
        <div id="add">
          <button>Dodaj post</button>
        </div>
        <div>
            {this.state.postsCurrent.map((v)=>{return <Post subject={v.subject} title={v.title} post={v.postText} comments={v.comments}/>})}
        </div>
      </div>
    );
  }
}
App.defaultProps = {
};
export default App;
