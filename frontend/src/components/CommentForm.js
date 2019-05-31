import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { Menu, Icon } from 'antd';
import { sendComment } from '../actions/comments';
import { Link } from 'react-router-dom';
import Header from '../components/Header'

const { SubMenu }  = Menu;

class CommentForm extends Component {

	state = {
		title: '',
		author: '',
		body: '',
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
		
	}

	editPost = (post) => {

		this.setState(() => ({
		  id: post.id,
	      title: post.title,
	      author: post.author,
	      category: post.category,
	      body: post.body,
	    }))

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

	    const category = e.key
	    this.setState(() => ({
	      category
	    }))
	}

	handleSubmit = (e) => {
	    e.preventDefault()

	    const { id, title, author, body } = this.state;
	    let parentId = this.props.parentId;

	    if(this.state.id) {
	    	let data = {
	    		id,
		    	title,
		    	author,
		    	body,
		    	parentId
	    	}
	    	// this.props.dispatch(editPost(data));
	    } else {
	    	let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

		    let data = {
		    	id,
		    	title,
		    	author,
		    	body,
		    	parentId
	    	}
	    	this.props.dispatch(sendComment(data));
	    }	    
	    this.cleanState();	    
	  }

	  cleanState = () => {
	  	this.setState(() => ({
	  	  id: '',
	      title: '',
	      author: '',
	      body: '',
	    }))
	  }

	  isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
		}

	render() {

		const { title, author, body } = this.state;

		return (
			<div>
				<Header />
				<div style={{ paddingLeft: 40, cursor: 'auto', width: 400 }}>
				<form> 

					<span>
					<label> Titulo </label>
					<Input placeholder="Titulo" value={title} onChange={this.titleChange}/>
					</span>

					<span>
					<label> Author </label>
					<Input placeholder="Autor" value={author} onChange={this.authorChange}/>
					</span>
					

					<label> Corpo</label>
					<textarea style={{ width: 400, height:100}} placeholder="Mensagem" value={body} onChange={this.bodyChange}/>					

					<Link to={`/`}>
					<Button onClick={this.handleSubmit}>Submit</Button>
					</Link>
				</form>
				</div>
  			</div>
		);
	}
}

export default connect()(CommentForm);