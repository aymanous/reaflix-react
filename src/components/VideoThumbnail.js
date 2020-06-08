import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoThumbnail = ({
	video: { id, title, description, thumbnail, file },
	onClick,
}) => (
	<Link to={`/videos/${id}`}>
		<img src={`https://source.unsplash.com/${thumbnail}/600x340`} />
		<section className="infos">
			<h4>{title}</h4>
			<p>{description}</p>
		</section>
	</Link>
);
VideoThumbnail.propTypes = {
	video: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		thumbnail: PropTypes.string.isRequired,
	}).isRequired,
};
export default VideoThumbnail;
