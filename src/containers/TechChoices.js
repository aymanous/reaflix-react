import React, { Component } from 'react';
import { connect } from 'react-redux';

class TechChoices extends Component {
	render() {
		return <p>TechChoices</p>;
	}
}

export default connect(state => ({}), {})(TechChoices);
