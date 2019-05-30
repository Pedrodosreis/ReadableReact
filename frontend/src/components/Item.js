import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { voteScore, unvoteScore } from '../actions/posts';
import { Comment, Icon, Tooltip, Avatar } from 'antd';


import moment from 'moment';

class Item extends Component {

	like = () => {
		this.props.dispatch(voteScore(this.props.post.id, this.props.category, this.props.sort));
	};

	dislike = () => {
		this.props.dispatch(unvoteScore(this.props.post.id, this.props.category, this.props.sort));
	};

	addReply = () => {
	};



	render() {

		const actions = [
			<span>
			<Tooltip title="Like">
			<span style={{ paddingRight: 8, cursor: 'auto' }}>{this.props.post.voteScore}</span>
			<Icon
			type="like"
			onClick={this.like}
			/>
			</Tooltip>
			
			</span>,	
			<span>
	        <Tooltip title="Dislike">
	          <Icon
	            type="dislike"
	            onClick={this.dislike}
	          />
	        </Tooltip>
	      </span>,			
			<span onClick={this.addReply()}>Reply to</span>,
			<span >{this.props.post.commentCount + ' Comentario(s)'} </span>,
		];


		return (

		<div>
		<Comment
		actions={actions}
		author={this.props.post.author}
		content={
			<div>
			<h5>Category - {this.props.post.category}</h5>
			<h4>{this.props.post.title}</h4>			
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

export default connect()(Item);