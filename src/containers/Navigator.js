import React from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoForm from './VideoForm';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

class Navigator extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={VideoList} />
				<Route exact path="/videos/new" component={VideoForm} />
				<Route exact path="/videos/:id" component={VideoDetail} />
			</Switch>
		);
	}
}

export default connect(state => ({
	navigation: state.navigation,
}))(Navigator);
