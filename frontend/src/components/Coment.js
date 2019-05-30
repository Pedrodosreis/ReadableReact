import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { getAllPosts } from '../actions/posts';
import Item from './Item.js';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Coment extends Component {

	componentDidMount() {
		this.props.dispatch(getAllPosts());
	}

	isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
	}

	render() {

		let posts = [];
		if(this.isArray(this.props.posts)) {
			posts = this.props.posts.map((post, key) => {
				return <Item key={key} post={post} />
			})
		}

		return (

		<div>		
			{posts}		
		</div>
		);
	}
}

function mapStateToProps ({ posts }) {
	return {
		posts: posts
	}
}

export default connect(mapStateToProps)(Coment);