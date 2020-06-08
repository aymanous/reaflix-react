import React from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoForm from './VideoForm';
import { connect } from 'react-redux';

class Navigator extends React.Component {
	render() {
		const { screen, params } = this.props.navigation;
		switch (screen) {
			case 'list':
				return <VideoList params={params} />;
				break;
			case 'detail':
				return <VideoDetail params={params} />;
				break;
			case 'form':
				return <VideoForm params={params} />;
				break;
		}
		return null;
	}
}

export default connect(state => ({
	navigation: state.navigation,
}))(Navigator);
