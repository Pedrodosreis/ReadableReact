import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Comment, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { deleteComment } from '../actions/comments';
import { increaseCommentScore, decreaseCommentScore } from '../actions/comments'


class AllComments extends Component {

	state = {
		onChange: false,
	}

	like = () => {		
		this.props.dispatch(increaseCommentScore(this.props.comment.id));		
	}

	dislike = () => {
		this.props.dispatch(decreaseCommentScore(this.props.comment.id));
	}

	delete = () => {
		this.props.dispatch(deleteComment(this.props.comment.id));
		this.setState( {onChange : !this.state.onChange} )
	}

	render() {

		const actions = [
		<span>
		<Tooltip title="Like">
		<span style={{ paddingRight: 8, cursor: 'auto' }}>{this.props.comment.voteScore}</span>
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

		<Link to={`/new/comment/${this.props.comment.parentId}/${this.props.comment.id}`}>
		<span style={{ paddingLeft: 10 }}>Editar</span>
		</Link>,

		<span style={{ paddingLeft: 8, cursor: 'auto' }}> <Tooltip title="Delete">
		<Icon type="delete" onClick={this.delete} />
		</Tooltip> </span>,
		];

		return (			
			<div style={{ paddingLeft: 40, cursor: 'auto' }}>
			<Comment
			actions={actions}
			author={this.props.comment.author}
			content={
				<div>
				<h4>{this.props.comment.title}</h4>
				<p> {this.props.comment.body}	</p>			
				</div> }
				datetime= {
					<span>{(new Date(this.props.comment.timestamp)).toDateString()}</span> }
					/>
					</div>			
					);
	}
}

function mapStateToProps ({ comments }) {
	return {
		comments: comments
	}
}

export default connect(mapStateToProps)(AllComments);