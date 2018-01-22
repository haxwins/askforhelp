import React, { Component } from 'react';
import Post from './Post.js'
import './app.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
	  postsAll: [],
    postsCurrent: [],
	  postAdd: false,
    }
      let url = 'http://localhost:3000/posts';
      fetch(url)
        .then((response)=>response.json())
		    .then(response=>{
			       response.sort(this.dateSortDesc);
			          this.setState({postsAll: response,
                              postsCurrent: response});
			  })
  }
  filter(key){
    if(key === "All"){
      this.setState({postsCurrent: this.state.postsAll});
    }
    else{
      let newarr=[];
      this.state.postsAll.map((v)=>{
        if(v.subject === key){
          return newarr = [...newarr,v];
        }
      })
	    newarr.sort(this.dateSortDesc);
      this.setState({postsCurrent: newarr});
    }
  }
  search(value){
    value = value.toLowerCase();
    let newarr=[];
    this.state.postsAll.map((v)=>{
      if(v.title.toLowerCase().includes(value)===true){
        return newarr = [...newarr,v];
      }
    })
	newarr.sort(this.dateSortDesc);
    this.setState({postsCurrent: newarr});
  }
  toggle = () =>{
    this.setState({postAdd: !this.state.postAdd});
  }
  showPostAdd = () =>{
    if(this.state.postAdd){
      return (
        <div className="addPost">
          <form method="post" action="http://localhost:3000/">
		  <div>
			<select name="[subject]" required>
				<option value="">Przedmiot</option>
				<option value="Mat">Matematyka</option>
				<option value="Pol">Polski</option>
				<option value="His">Historia</option>
				<option value="Fiz">Fizyka</option>
				<option value="Chem">Chemia</option>
				<option value="Geo">Geografia</option>
				<option value="Bio">Biologia</option>
				<option value="Ang">Angielski</option>
				<option value="Inne">Inny</option>
			</select>
			<input type="text" name="[title]" placeholder="Tytuł" required/>
		</div>
		<div>
			<textarea rows="3" type="text" name="[postText]" placeholder="Treść..." required/>
		</div>
		<div>
			<input type="submit" value="Wyślij"/>
		</div>
		</form>
		</div>
      )
    }
    else{
      return <div></div>
    }
  }
  dateSortDesc = (d1, d2) =>{
		if (d1.date > d2.date) return -1;
		if (d1.date < d2.date) return 1;
		return 0;
  }
  render() {
    return (
      <div>
        <div className="input">
          <input placeholder="Szukaj..." onChange={(e)=>this.search(e.target.value)}></input>
        </div>
        <div className="nav">
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
        <div className="add">
          <button onClick={()=>this.toggle()}>{(this.state.postAdd) ? '^' : 'Dodaj post'}</button>
        </div>
		<div>
			{this.showPostAdd()}
		</div>
        <div>
            {this.state.postsCurrent.map((v)=>{return <Post id={v._id} subject={v.subject} title={v.title} post={v.postText} comments={v.comments}/>})}
        </div>
      </div>
    );
  }
}
export default App;
