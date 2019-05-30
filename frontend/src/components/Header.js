import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions/categories';
import { getAllPosts } from '../actions/posts';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const { SubMenu }  = Menu;

class Header extends Component {

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
				return <Menu.Item key={category.name} onClick={this.categoryClick}>{category.name}</Menu.Item>
			})
		}
		return (

		<div>
		<Menu mode="horizontal">
		<Menu.Item key="title" onClick={this.handleClick} >
		Readable
		</Menu.Item>

		<SubMenu
		title={
			<span className="submenu-title-wrapper">
			<Icon type="setting" />Categorias
			</span>
		}>
		{categories}						
		</SubMenu>

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

const mapDispatchToProps = dispatch => ({
	getAllCategories: () => dispatch(getAllCategories()),
})

export default connect(mapStateToProps)(Header);