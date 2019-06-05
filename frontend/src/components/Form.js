import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { Menu, Icon } from 'antd';
import { sendPost, editPost } from '../actions/posts';
import { Link } from 'react-router-dom';

const { SubMenu }  = Menu;

class Form extends Component {

	state = {
		title: '',
		author: '',
		body: '',
		category: 'Categoria',
	}

	componentWillReceiveProps(nextProps) {
		this.editPost(nextProps.posts);
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
	    const { id, title, author, body, category } = this.state;

	    if(this.state.id) {
	    	let data = {
	    		id,
		    	title,
		    	author,
		    	body,
		    	category,
	    	}
	    	this.props.dispatch(editPost(data));
	    } else {
	    	let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

		    let data = {
		    	id,
		    	title,
		    	author,
		    	body,
		    	category,
	    	}
	    	this.props.dispatch(sendPost(data));
	    }	    
	    this.cleanState();	    
	  }

	  cleanState = () => {
	  	this.setState(() => ({
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

		let categories = [];
		if(this.isArray(this.props.categories)) {
			categories = this.props.categories.map(category => {
				return <Menu.Item key={category.name} onClick={this.categoryChange}>{category.name}
				</Menu.Item>
			})
		}

		return (
			<div>
				<div style={{ width: 250}}>
				<form> 
					<label> Titulo </label>
					<Input placeholder="Titulo" value={title} onChange={this.titleChange}/>

					<label> Author </label>
					<Input placeholder="Autor" value={author} onChange={this.authorChange}/>
					<span >
					<label style={{ width: 100, display: 'inline-block'}}> Categoria </label>
					<Menu mode="horizontal" style={{ width: 150, display: 'inline-block'}}>
					<SubMenu title={ <span className="submenu-title-wrapper">
						<Icon type="appstore" />{this.state.category} </span> }>
					   {categories}
					</SubMenu>
					</Menu>
					</span>

					<label> Corpo</label>
					<textarea style={{ width: 250, height:100}} placeholder="Mensagem" value={body} onChange={this.bodyChange}/>					

					<Link to={`/`}>
					<Button onClick={this.handleSubmit}>Submit</Button>
					</Link>
				</form>
				</div>

				


  			</div>
		);
	}
}

export default connect()(Form);