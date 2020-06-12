import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
	render() {
		return <p>Results</p>;
	}
}

export default connect(state => ({}), {})(Results);
