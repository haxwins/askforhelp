import React, { Component } from 'react';
import Post from './Post.js'
import './app.css';
const a = [{
    subject: 'Math',
    title: 'asgageasg',
},
{
  subject: 'Geo',
  title: 'asgageasg222222222',
}];
const c = <Post subject={a[0].subject} title={a[0].title}/>;
const d = <Post subject={a[1].subject} title={a[1].title}/>;
let e = [c,d];
const f = <Post subject={a[1].subject} title={a[1].title}/>;
console.log(e);
//e = e.concat(f);
e = [...e,f];
class App extends Component {
  render() {
    return (
      <div>
        <div id="nav">
          <div className="nav-Math">Math</div>
          <div className="nav-Phy">Physics</div>
          <div className="nav-Chem">Chemistry</div>
          <div className="nav-Geo">Geographic</div>
          <div className="nav-Other">Others</div>
        </div>
        <div>
          {e}

        </div>
      </div>
    );
  }

}
App.defaultProps = {
};
export default App;
