import React from 'react';
import PropTypes from 'prop-types';

const VideoThumbnail = ({
	video: { title, description, thumbnail, file },
	onClick,
}) => (
	<a
		href={`./uploads/${file}`}
		onClick={event => {
			event.preventDefault();
			onClick();
		}}
	>
		<img src={`https://source.unsplash.com/${thumbnail}/600x340`} />
		<section className="infos">
			<h4>{title}</h4>
			<p>{description}</p>
		</section>
	</a>
);
VideoThumbnail.propTypes = {
	video: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		thumbnail: PropTypes.string.isRequired,
	}).isRequired,
};
export default VideoThumbnail;
