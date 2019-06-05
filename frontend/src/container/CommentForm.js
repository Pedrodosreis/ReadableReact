import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { sendComment } from '../actions/comments';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { getCommentById, editComment } from '../actions/comments';
import { getPostById } from '../actions/posts';

class CommentForm extends Component {

	state = {
		id: 0,
		author: '',
		body: '',
		parentId: '',
	}

	componentDidMount() {
		let comment = this.props.comments.filter(c => {
			return c.id === this.props.match.params.commentId
		})
		if(comment.length === 1) {
			this.setState( {
				id: comment[0].id, 
				author: comment[0].author, 
				body: comment[0].body,
			})
		}

		let post = this.props.posts.filter(p => {
			return p.id === this.props.match.params.postId
		})
		this.setState({
			parentId: post[0].id,
		})
	}

	componentWillReceiveProps(nextProps) {
		this.editComment(nextProps.comments);
	}

	editComment = (comment) => {

		this.setState(() => ({
		  id: comment.id,
	      author: comment.author,
	      body: comment.body,
	      parentId: comment.parentId,
	      deleted: comment.deleted,
	      parentDeleted: comment.parentDeleted,
	      voteScore: comment.voteScore,
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

	    const { id, author, body, parentId, deleted, parentDeleted, voteScore } = this.state;	    

	    if(id) {
	    	let data = {
	    		id,
		    	author,
		    	body,
		    	parentId, 
		    	deleted, 
		    	parentDeleted, 
		    	voteScore,
	    	}
	    	this.props.dispatch(editComment(data));
	    } else {
	    	let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

		    let data = {
		    	id,
		    	author,
		    	body,
		    	parentId
	    	}
	    	console.log(data)
	    	this.props.dispatch(sendComment(data));
	    }	    
	    this.cleanState();	    
	  }

	  cleanState = () => {
	  	this.setState(() => ({
	  	  id: '',
	      author: '',
	      body: '',
	    }))
	  }

	  isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
		}

	render() {

		const { author, body } = this.state;

		return (
			<div>
				<Header />
				<div style={{ paddingLeft: 40, cursor: 'auto', width: 400 }}>
				<form>
					<label> Author </label>
					<Input placeholder="Author" value={author} onChange={this.authorChange}/>					

					<label> Corpo</label>
					<textarea style={{ width: 400, height:100}} placeholder="Mensagem" value={body} onChange={this.bodyChange}/>					

					<Link to={`/${this.props.posts.category}/${this.props.match.params.postId}`}>
					<Button onClick={this.handleSubmit}>Submit</Button>
					</Link>
				</form>
				</div>
  			</div>
		);
	}
}

function mapStateToProps ({ comments, posts }) {
	return {
		comments: comments,
		posts: posts
	}
}

export default connect(mapStateToProps)(CommentForm);