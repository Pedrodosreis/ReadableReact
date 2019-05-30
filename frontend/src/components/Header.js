import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions/categories';
import { getAllPosts, sortByVote } from '../actions/posts';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Coment from './Coment.js';


const { SubMenu }  = Menu;

class Header extends Component {

	state =  {
		sort: false
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

	sortByVote = () => {
		this.props.dispatch(sortByVote(this.props.category, this.state.sort));

		this.setState(prevState => ({
		  sort: !this.state.sort
		}));
	}

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

		</Menu>

		<Coment category={this.props.match.params.category} sort={this.sort} updateSort={this.sortByVote}/>
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