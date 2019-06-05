import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Comment, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/posts';
import { voteScore, unvoteScore } from '../actions/posts';

class FullPost extends Component {

	state = {
		onChange: false,
	}

	delete = () => {
		this.props.dispatch(deletePost(this.props.post));		
	}

	like = () => {
		this.props.dispatch(voteScore(this.props.post));
		this.setState({ onChange: !this.state.onChange })
	};

	dislike = () => {
		this.props.dispatch(unvoteScore(this.props.post));
		this.setState({ onChange: !this.state.onChange })
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
			<span style={{ paddingLeft: 10 }}>{this.props.post.commentCount + ' Comentario(s)'} </span>,

			<Link to={`/new/${this.props.post.id}`}>
			<span>Editar</span>
			</Link>,

			<Link to={`/`}> <span style={{ paddingLeft: 8, cursor: 'auto' }}> <Tooltip title="Delete">
			<Icon type="delete" onClick={this.delete} />
			</Tooltip> </span> </Link>,

			<Link to={`/new/comment/${this.props.post.id}/undefined`}>
			<span style={{ paddingLeft: 10 }}>New Comment</span>
			</Link>,
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
					<p> {this.props.post.body}	</p>			
					</div> }
				datetime= { <span>{(new Date(this.props.post.timestamp)).toDateString()}</span> }
			/>
		</div>			
		);
	}
}

function mapStateToProps ({ posts }) {
	return {
		posts: posts
	}
}

export default connect(mapStateToProps)(FullPost);