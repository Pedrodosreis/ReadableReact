import React, {Component} from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {

	render() {

		return (
		<div>
			<h1>404 Not Found</h1>
			<h3 style={{ paddingLeft: 20}}>Page not found</h3>
		</div>
		);
	}
}

export default connect()(NotFound);