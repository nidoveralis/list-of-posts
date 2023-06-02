import './vendor/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router, Route, Switch , Redirect, useHistory, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Posts from './components/Posts';
import AboutMe from './components/AboutMe';
import './App.css';
import getPosts from './utils/utils'
import { Button } from 'react-bootstrap';

function App() {
  const [posts,setPosts] = React.useState();

  return (
    <div className="App">
      <Header />
      <Button onClick={getPosts}>ok</Button>
        <Switch >
          <Route path="/" exact  component={Main} posts={posts} />
          <Route path="/posts" component={Posts} />
          <Route path="/about-me" component={AboutMe} />
        </Switch >

       
    </div>
  );
}

export default App;
//<Router>
//<Routes >
  //  <Route path="/" component={Main} />
  //  <Route path="/posts" component={Posts} />
  //  <Route path="/about-me" component={AboutMe} />
  //</Routes >
//</Router>