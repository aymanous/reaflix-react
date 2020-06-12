import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component {
	render() {
		return <p>Team</p>;
	}
}

export default connect(state => ({}), {})(Team);
