import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Header from '../components/Header.js';
import FullPost from '../components/FullPost.js';
import AllComments from '../components/AllComments.js';
import { getCommentsByPostId } from '../actions/comments';
import { Redirect } from 'react-router-dom';


class PostPage extends Component {

	componentDidMount() {
		this.props.dispatch(getCommentsByPostId(this.props.match.params.id));
	}

	isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
	}

	errorPage = () => {
		return <Redirect to="/notfound" />;
	}

	isEmpty = (obj) => {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
	    return true;
	}

	render() {

		if(this.props.posts.error === 'There was an error.') {
			return this.errorPage();
		}

		if(this.isEmpty(this.props.posts)) {
			return this.errorPage();
		}

		let comments = [];
		
		if(this.isArray(this.props.comments)) {
			comments = this.props.comments.map((comment, key) => {
				return <AllComments key={key} comment={comment} category={this.props.posts.category}/>
			})
		}

		let localPost;
		if(this.isArray(this.props.posts)) {
			this.props.posts.map(p => {
			if(p.id === this.props.match.params.id) {
				localPost = p;
			}
			return p;
		})
		} else {
			localPost = this.props.posts;
		}
		

		return (

		<div>
			<Header />
			<FullPost post={localPost} />		
			{comments}
		</div>
		);
	}
}

function mapStateToProps ({ posts, comments }) {
	return {
		posts: posts,
		comments: comments
	}
}

export default connect(mapStateToProps)(PostPage);