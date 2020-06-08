import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoThumbnail from '../components/VideoThumbnail';
import { fetchVideos } from '../actions/videos';

class VideoList extends Component {
	componentDidMount() {
		this.props.dispatch(fetchVideos());
	}
	render() {
		const { videos } = this.props,
			classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;

		return (
			<div className="container">
				<header>
					<h1>Recommandations</h1>
				</header>
				<div className={classNames}>
					{videos.map(video => (
						<VideoThumbnail video={video} key={video.id} />
					))}
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		videos: state.videos,
	};
}
export default connect(mapStateToProps)(VideoList);
