import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { getAllCategories } from '../actions/categories';
import Header from '../components/Header.js';
import Form from '../components/Form.js';
import { getPostById } from '../actions/posts';

class NewPost extends Component {

	componentDidMount() {
		this.props.dispatch(getAllCategories());

		if(this.props.match.params.id) {
			this.props.dispatch(getPostById(this.props.match.params.id));
		}
	}

	render() {

		return (
			<div>
				<Header />
				<Form categories={this.props.categories} posts={this.props.posts}/>
  			</div>
		);
	}
}

function mapStateToProps ({ categories, posts }) {
	return {
		categories: categories,
		posts: posts
	}
}

export default connect(mapStateToProps)(NewPost);