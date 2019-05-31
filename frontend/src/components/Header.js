import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions/categories';
import { getAllPosts } from '../actions/posts';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { SubMenu }  = Menu;

class Header extends Component {

	state = {
		sort: 'Not sort'
	}

	componentDidMount() {
		this.props.dispatch(getAllCategories());
	}

	handleClick = e => {
		this.props.dispatch(getAllPosts());
	};

	categoryClick = e => {
		this.props.dispatch(getAllPosts(e.key));
	};

	isArray =  (value) => {
		return value && typeof value === 'object' && value.constructor === Array;
	}	

	render() {

		let categories = [];
		if(this.isArray(this.props.categories)) {
			categories = this.props.categories.map(category => {
				return <Menu.Item key={category.name} onClick={this.categoryClick}>{category.name}
				  <Link to={`/${category.name}`}>
	                {category.name}
	              </Link>
				</Menu.Item>
			})
		}
		return (

		<div>		
		<Menu mode="horizontal">

		<Menu.Item key="title" onClick={this.handleClick}>
		Readable
		<Link to={`/`}> </Link>
		</Menu.Item>

		<SubMenu
			title={
				<span className="submenu-title-wrapper">
				<Icon type="setting" />Categorias
				</span>
			}>
			{categories}						
		</SubMenu>

		<Menu.Item key="New Post" onClick={this.handleClick}>
		New Post
		<Link to={`/new`}> </Link>
		</Menu.Item>

		</Menu>

		</div>
		);
	}
}

function mapStateToProps ({ categories }) {
	return {
		categories: categories
	}
}

export default connect(mapStateToProps)(Header);