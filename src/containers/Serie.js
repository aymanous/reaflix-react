import React, { Component } from 'react';
import { connect } from 'react-redux';

class Series extends Component {
	render() {
		return <p>Series</p>;
	}
}

export default connect(state => ({}), {})(Series);
