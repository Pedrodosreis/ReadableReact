import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Header from '../components/Header.js';
import FullPost from '../components/FullPost.js';
import AllComments from '../components/AllComments.js';
import CommentForm from '../components/CommentForm.js';
import { getPostById } from '../actions/posts';
import { getCommentsByPostId } from '../actions/comments';

class PostPage extends Component {

	componentDidMount() {
		this.props.dispatch(getPostById(this.props.match.params.id));
		this.props.dispatch(getCommentsByPostId(this.props.match.params.id));
	}

	isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
	}

	render() {

		let comments = [];
		
		if(this.isArray(this.props.comments)) {
			comments = this.props.comments.map((comment, key) => {
				return <AllComments key={key} comment={comment} />
			})
		}

		return (

		<div>
			<Header />
			<FullPost posts={this.props.posts} />			
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