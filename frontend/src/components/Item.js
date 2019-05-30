import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { voteScore } from '../actions/posts';



import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Item extends Component {

	state = {
		likes: this.props.post.voteScore + 1,
		action: null,
	};

	like = () => {
		// this.props.dispatch(voteScore(this.props.post.id, this.props.post.voteScore + 1));
		this.setState({
			likes: this.props.post.voteScore + 1,
		});
	};

	addReply = () => {
	};



	render() {

		const { likes, action } = this.state;	

		const actions = [
		<span>
		<Tooltip title="Like">
		<Icon
		type="like"
		theme={action === 'liked' ? 'filled' : 'outlined'}
		onClick={this.like}
		/>
		</Tooltip>
		<span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
		</span>,				
		<span onClick={this.addReply()}>Reply to</span>,
		];


		return (

		<div>
		<Comment
		actions={actions}
		author={this.props.post.author}
		content={
			<div>
			<h4>{this.props.post.title}</h4>
			<h5>Category - {this.props.post.category}</h5>
			<p>
			{this.props.post.body}
			</p>
			</div>
		}
		datetime={
			<span>{(new Date(this.props.post.timestamp)).toDateString()}</span>
		}
		/>
		</div>
		);
	}
}

function mapStateToProps ({ post }) {
	return {
		post: post
	}
}

export default connect(mapStateToProps)(Item);