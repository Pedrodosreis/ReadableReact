import React, {Component} from 'react';
import NewPost from './NewPost.js';
import MainPage from './MainPage.js';
import PostPage from './PostPage.js';
import NotFound from './NotFound.js';
import CommentForm from './CommentForm'
import { Switch, Route, withRouter } from 'react-router-dom';


class App extends Component {

  render() {

    return (
      <div >
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/new' exact component={NewPost} />
            <Route path='/notfound' exact component={NotFound} />  
            <Route path='/new/:id' exact component={NewPost} />
            <Route path='/:category' exact component={MainPage} />
            <Route path='/:category/:id' exact component={PostPage} />
            <Route path='/new/comment/:postId/:commentId' exact component={CommentForm} />
                     
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
