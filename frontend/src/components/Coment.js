import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { getAllPosts, sortByVote } from '../actions/posts';
import Item from './Item.js';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

class Coment extends Component {	

	componentDidMount() {
		this.props.sort ? this.props.dispatch(sortByVote(this.props.category)) : this.props.dispatch(getAllPosts(this.props.category));		
	}

	isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
	}

	sortByVote = () => {
		this.props.dispatch(sortByVote(this.props.category));

		this.setState(prevState => ({
		  sort: !this.props.sort
		}));
		console.log(this.props.sort)
	}

	render() {

		let posts = [];
		if(this.isArray(this.props.posts)) {
			posts = this.props.posts.map((post, key) => {
				return <Item key={key} post={post} category={this.props.category} sort={this.props.sort}/>
			})
		}

		return (

		<div>
			<br /> <br />
			<button style={{ marginLeft: 8}} onClick={this.props.updateSort}>Ordenar por votos</button>			
			<NavLink to="/new"> <button style={{ marginLeft: 8}} >Novo Post </button> </NavLink>
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