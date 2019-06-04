import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Comment, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/posts';
import { voteScore, unvoteScore } from '../actions/posts';

class FullPost extends Component {

	componentDidMount() {				
	}

	delete = () => {
		this.props.dispatch(deletePost(this.props.posts));
	}

	like = () => {
		this.props.dispatch(voteScore(this.props.posts));
	};

	dislike = () => {
		this.props.dispatch(unvoteScore(this.props.posts.id, null, false, false));
	};

	render() {

		const actions = [
			<span>
			<Tooltip title="Like">
			<span style={{ paddingRight: 8, cursor: 'auto' }}>{this.props.posts.voteScore}</span>
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
			<span style={{ paddingLeft: 10 }}>{this.props.posts.commentCount + ' Comentario(s)'} </span>,

			<Link to={`/new/${this.props.posts.id}`}>
			<span>Editar</span>
			</Link>,

			<Link to={`/`}> <span style={{ paddingLeft: 8, cursor: 'auto' }}> <Tooltip title="Delete">
			<Icon type="delete" onClick={this.delete} />
			</Tooltip> </span> </Link>,

			<Link to={`/new/comment/${this.props.posts.id}/undefined`}>
			<span style={{ paddingLeft: 10 }}>New Comment</span>
			</Link>,
		];


		return (			
		<div>
			<Comment
				actions={actions}
				author={this.props.posts.author}
				content={
					<div>
					<h5>Category - {this.props.posts.category}</h5>
					<h4>{this.props.posts.title}</h4>
					<p> {this.props.posts.body}	</p>			
					</div> }
				datetime= { <span>{(new Date(this.props.posts.timestamp)).toDateString()}</span> }
			/>
		</div>			
		);
	}
}

export default connect()(FullPost);