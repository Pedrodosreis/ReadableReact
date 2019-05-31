import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Coment from '../components/Coment.js';
import Header from '../components/Header.js';

class MainPage extends Component {

	render() {

		return (

		<div>
			<Header />
			<Coment category={this.props.match.params.category} />
		</div>
		);
	}
}

export default connect()(MainPage);