import React, {Component} from 'react';
import { getCategories, getPosts, getPost, addPost } from './utils/API.js';
import Header from './components/Header.js';
import Coment from './components/Coment.js';
import NewPost from './components/NewPost.js';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <div >
          <Switch>
            <Route path='/' exact component={Header} />
            <Route path='/new' exact component={NewPost} />
            <Route path='/:category' exact component={Header} />
            
          </Switch>
      </div>
    );
  }

}

export default withRouter(App);
