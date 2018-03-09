import React, { Component } from 'react';
import Post from './Post.js'
import renderData from './renderData.js'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postsAll: [],
      postsCurrent: [],
      postAdd: false,
    }
  }
  componentDidMount() {
    this.requestData();
  }
  requestData = () => {
    let url = 'http://localhost:3000/posts';
    fetch(url)
      .then((response) => response.json())
      .then(response => {
        response.sort(this.dateSortDesc);
        this.setState({
          postsAll: response,
          postsCurrent: response
        });
      })
  }
  showPostAdd = () => {
    if (this.state.postAdd) {
      return (
        <div className="addPost">
          <form>
            <div>
              <select id="subject" required>
                {renderData.map((v) => {
                  if (v.key === 'All') {
                    return <option value="">Przedmiot</option>
                  }
                  else {
                    return <option value={v.key}>{v.subject}</option>
                  }
                })}
              </select>
              <input id="title" type="text" placeholder="Tytuł" />
            </div>
            <div>
              <textarea id="postText" rows="3" placeholder="Treść..." />
            </div>
            <div>
              <button onClick={this.handleSubmit}>Wyślij</button>
            </div>
          </form>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let subject = document.getElementById('subject').value;
    let title = document.getElementById('title').value;
    let postText = document.getElementById('postText').value;
    let url = 'http://localhost:3000/post' + '/' + subject + '/' + title + '/' + postText;
    fetch(url, { method: 'post' });
    this.toggle();
    setTimeout(this.requestData(), 2000);
  }
  filter = (key) => {
    if (key === "All") {
      this.setState({ postsCurrent: this.state.postsAll });
    }
    else {
      let newarr = [];
      this.state.postsAll.map((v) => {
        if (v.subject === key) {
          return newarr = [...newarr, v];
        }
        else return null;
      })
      newarr.sort(this.dateSortDesc);
      this.setState({ postsCurrent: newarr });
    }
  }
  search = (e) => {
    let value = e.target.value.toLowerCase();
    let newarr = [];
    this.state.postsAll.map((v) => {
      if (v.title.toLowerCase().includes(value) === true) {
        return newarr = [...newarr, v];
      }
      else return null;
    })
    newarr.sort(this.dateSortDesc);
    this.setState({ postsCurrent: newarr });
  }
  toggle = () => {
    this.setState({ postAdd: !this.state.postAdd });
  }
  dateSortDesc = (d1, d2) => {
    if (d1.date > d2.date) return -1;
    if (d1.date < d2.date) return 1;
    return 0;
  }
  render() {
    return (
      <div>
        <div className="input">
          <input placeholder="Szukaj..." onChange={this.search}></input>
        </div>
        <div className="nav">
          {renderData.map((v) => {
            let className = 'nav-' + v.key;
            let key = v.key;
            return <div className={className} onClick={() => { this.filter(key) }}>{v.subject}</div>;
          })}
        </div>
        <div className="add">
          <button onClick={this.toggle}>{(this.state.postAdd) ? '^' : 'Dodaj post'}</button>
        </div>
        <div>
          {this.showPostAdd()}
        </div>
        <div>
          {this.state.postsCurrent.map((v) => { return <Post refreshData={this.requestData} id={v._id} subject={v.subject} title={v.title} post={v.postText} comments={v.comments} /> })}
        </div>
      </div>
    );
  }
}
export default App;
