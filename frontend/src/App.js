import React, {Component} from 'react';
import NewPost from './container/NewPost.js';
import MainPage from './container/MainPage.js';
import PostPage from './container/PostPage.js';
import { Switch, Route, withRouter } from 'react-router-dom';
import CommentForm from './container/CommentForm'

class App extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <div >
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/new' exact component={NewPost} />
            <Route path='/new/:id' exact component={NewPost} />
            <Route path='/:category' exact component={MainPage} />
            <Route path='/:category/:id' exact component={PostPage} />
            <Route path='/new/comment/:id' exact component={CommentForm} />            
          </Switch>
      </div>
    );
  }

}

export default withRouter(App);
