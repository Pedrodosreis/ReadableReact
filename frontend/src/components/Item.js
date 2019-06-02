import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { voteScore, unvoteScore } from '../actions/posts';
import { Comment, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

class Item extends Component {

	like = () => {
		let sort =  this.props.sort === 'Not sort' ? false : true;

		this.props.dispatch(voteScore(this.props.post.id, this.props.category, sort, true));
	};

	dislike = () => {
		let sort =  this.props.sort === 'Not sort' ? false : true;

		this.props.dispatch(unvoteScore(this.props.post.id, this.props.category, sort, true));
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

			<span >{this.props.post.commentCount + ' Comentario(s)'} </span>,			
		];

		return (

		<div>
		<Comment
		actions={actions}
		author={this.props.post.author}
		content={
			<Link to={`/${this.props.post.category}/${this.props.post.id}`}>
			<div>
			<h5>Category - {this.props.post.category}</h5>
			<h4>{this.props.post.title}</h4>			
			</div>
			</Link>
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