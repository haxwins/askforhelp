import React, { Component } from 'react';
import Post from './Post.js'
import './app.css';
const arr_posts = [{
    subject: 'Mat',
    title: 'Funkcja kwadratowa, miejsca zerowe',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
    comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Pol',
  title: 'Lalka, streszczenie',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: [],
},
{
    subject: 'His',
    title: 'Bitwa pod Grunwaldem',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
    comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
    subject: 'Fiz',
    title: 'Zadanie z kinematyki',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
    comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Chem',
  title: 'Reakcja spalania',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Geo',
  title: 'Rzeki europy',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Bio',
  title: 'Komórka grzybowa',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Ang',
  title: 'Czas przeszły czasowniki',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Inne',
  title: 'Niemiecki, odmiany czasowników',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
    subject: 'Mat',
    title: 'Funkcja kwadratowa, miejsca zerowe',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
    comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Pol',
  title: 'Lalka, streszczenie',
  postText: 'Moglby ktos podeslac jakies najkrotsze streszczenie Lalki? Mam jutro sprawdzian i szybko potrzeboje nauczyc sie czegokolwiek z tej ksiazki',
  comments: ['ma youtube jest szybko audiobook ze streszczeniem, znajdziesz napewno', 'ja mam streszczenie na koncu ksiazki, sprawdz moze tez masz'],
},
{
    subject: 'His',
    title: 'Bitwa pod Grunwaldem',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
    comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
    subject: 'Fiz',
    title: 'Zadanie z kinematyki',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
    comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Chem',
  title: 'Reakcja spalania',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Geo',
  title: 'Rzeki europy',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Bio',
  title: 'Komórka grzybowa',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Ang',
  title: 'Czas przeszły czasowniki',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'dafhnWUIEGN'],
},
{
  subject: 'Inne',
  title: 'Niemiecki, odmiany czasowników',
  postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae purus mollis, lacinia erat non, consequat ipsum. Nam et laoreet est. Nulla luctus congue ante, eu ornare urna tempor vitae. Quisque quis odio mi. Vestibulum eleifend euismod nunc ultrices imperdiet. Praesent urna sapien, lobortis pretium malesuada feugiat, ultrices sed arcu. Sed sit amet ornare leo. Cras in luctus velit. Morbi ut lorem dolor. Vivamus interdum tempus arcu at facilisis. Suspendisse ac gravida diam. Donec commodo mollis efficitur. Vivamus vitae dolor rhoncus, posuere ipsum et, scelerisque ipsum. Suspendisse malesuada purus tempor volutpat mattis. Vestibulum sed nisi eros.',
  comments: ['dsaagsdgaga', 'Siema'],
},];

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
