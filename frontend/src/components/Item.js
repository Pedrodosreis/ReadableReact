import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { voteScore, unvoteScore } from '../actions/posts';
import { Comment, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

class Item extends Component {

	state = {
		onChange: false,
	}

	like = (localPost) => {
		this.props.dispatch(voteScore(localPost));
		this.setState({ onChange: !this.state.onChange })
	};

	dislike = (localPost) => {
		this.props.dispatch(unvoteScore(localPost));
		this.setState({ onChange: !this.state.onChange })
	};

	render() {

		let localPost;
		this.props.posts.map(p => {
			if(p.id === this.props.postId) {
				localPost = p;
			}
			return p;
		})

		const actions = [
			<span>
			<Tooltip title="Like">
			<span style={{ paddingRight: 8, cursor: 'auto' }}>{localPost.voteScore}</span>
			<Icon
			type="like"
			onClick={() => this.like(localPost)}
			/>
			</Tooltip>
			
			</span>,	
			<span>
	        <Tooltip title="Dislike">
	          <Icon
	            type="dislike"
	            onClick={() => this.dislike(localPost)}
	          />
	        </Tooltip>
	      </span>,

			<span >{localPost.commentCount + ' Comentario(s)'} </span>,			
		];

		return (

		<div>
		<Comment
		actions={actions}
		author={localPost.author}
		content={
			<Link to={`/${localPost.category}/${localPost.id}`}>
			<div>
			<h5>Category - {localPost.category}</h5>
			<h4>{localPost.title}</h4>			
			</div>
			</Link>
		}
		datetime={
			<span>{(new Date(localPost.timestamp)).toDateString()}</span>
		}
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

export default connect(mapStateToProps)(Item);