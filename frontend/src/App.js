import React, {Component} from 'react';
import { getCategories, getPosts, getPost, addPost } from './utils/API.js';
import Header from './components/Header.js';
import Coment from './components/Coment.js';


class App extends Component {


  componentDidMount() {

  }

  render() {

    return (
    <div >
      <Header />
      <br />
      <br />
      <Coment />
    </div>
    );
  }

}

export default App;
