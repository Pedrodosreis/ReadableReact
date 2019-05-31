import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Comment, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/posts';

class AllComments extends Component {

	componentDidMount() {				
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

	        <Link to={`/new/comment/${this.props.id}`}>
			<span style={{ paddingLeft: 10 }}>Editar</span>
			</Link>,

			<Link to={`/`}> <span style={{ paddingLeft: 8, cursor: 'auto' }}> <Tooltip title="Like">
			<Icon type="delete" onClick={this.delete} />
			</Tooltip> </span> </Link>,
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

export default connect()(AllComments);