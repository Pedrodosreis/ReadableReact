import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { getAllPosts, sortByDate } from '../actions/posts';
import Item from './Item.js';
import { Menu, Icon } from 'antd';

const { SubMenu }  = Menu;

class Coment extends Component {

	state = {
		sort: 'Not sort'
	}

	componentDidMount() {
		this.props.dispatch(getAllPosts(this.props.category, false));	
	}

	isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
	}

	sortChange = (e) => {

	    const sort = e.key
	    this.setState(() => ({
	      sort
	    }))

		const isSort =  sort === 'Not sort' ? false : true;
	    this.props.dispatch(sortByDate(isSort));	
	}

	render() {


		let posts = [];
		if(this.isArray(this.props.posts)) {
			posts = this.props.posts.map((post, key) => {
				return <Item key={key} postId={post.id} category={this.props.category}/>
			})
		}

		return (

		<div>
			<Menu mode="horizontal" style={{ width: 150, display: 'inline-block'}}>
				<SubMenu title={ <span className="submenu-title-wrapper">
					<Icon type="appstore" />{this.state.sort}</span> }>
					<Menu.Item key='Not sort' onClick={this.sortChange}>Not sort</Menu.Item>
					<Menu.Item key='Sort by Data' onClick={this.sortChange}>Sort by Data</Menu.Item>
				</SubMenu>
			</Menu>

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