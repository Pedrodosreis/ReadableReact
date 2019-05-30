import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { sendPost } from '../actions/posts';



const Search = Input.Search;



class NewPost extends Component {

	state = {
		title: '',
		author: '',
		body: '',
		category: '',
	}


	titleChange = (e) => {
	    const title = e.target.value

	    this.setState(() => ({
	      title
	    }))
	  }

 	authorChange = (e) => {
	    const author = e.target.value

	    this.setState(() => ({
	      author
	    }))
	  }

	 bodyChange = (e) => {
	    const body = e.target.value

	    this.setState(() => ({
	      body
	    }))
	}

	categoryChange = (e) => {
	    const category = e.target.value

	    this.setState(() => ({
	      category
	    }))
	}

	handleSubmit = (e) => {
	    e.preventDefault()

	    const { title, author, body, category } = this.state;

	    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

	    let data = {
	    	id,
	    	title,
	    	author,
	    	body,
	    	category,
	    }

	    this.props.dispatch(sendPost(data));

	    this.setState(() => ({
	      title: '',
	      author: '',
	      body: '',
	    }))
	  }

	render() {

		const { title, author, body, category } = this.state;

		return (
			<div style={{ width: 250}}>
				<form> 
					<label> Titulo </label>
					<Input placeholder="Titulo" value={title} onChange={this.titleChange}/>

					<label> Author </label>
					<Input placeholder="Autor" value={author} onChange={this.authorChange}/>

					<label> Categoria </label>
					<Input placeholder="Autor" value={category} onChange={this.categoryChange}/>

					<label> Corpo</label>
					<textarea style={{ width: 250, height:100}} placeholder="Mensagem" value={body} onChange={this.bodyChange}/>					

					<Button onClick={this.handleSubmit}>Submit</Button>
				</form>

				


  			</div>
		);
	}
}

export default connect()(NewPost);