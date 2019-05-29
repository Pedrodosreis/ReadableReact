import React, {Component} from 'react';
import { getCategories, getPosts, getPost, addPost } from './utils/API.js';
import Header from './components/Header.js';

class App extends Component {
  state = { data: [] }


  componentDidMount() {
    getCategories()
    .then (json => 
          this.setState({
          data: json
      }))
       
    //getPosts();
    //getPost("6ni6ok3ym7mf1p33lnez");
    // addPost({});    
  }

  render() {

    console.log(this.state.data);

    let categories = this.state.data.map(category => {
      return <li key={category.name}>{category.name}</li>
    })


    return (
      <div >
          <ul> 
            {categories}
          </ul>

          <Header />
        </div>
      );
    }

}

export default App;
