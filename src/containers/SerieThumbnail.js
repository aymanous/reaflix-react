import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const SerieThumbnail = ({
	serie = this.props.serie,
	image = serie.show.image == null
		? '../images/no_image.jpg'
		: serie.show.image.medium,
	name = serie.show.name,
	id = serie.show.id,
	premiered = serie.show.premiered,
	summary = serie.show.summary,
	average = serie.show.rating.average == null
		? 'Pas de note disponible'
		: serie.show.rating.average + ' / 10',
}) => {
	return (
		<Link className="linkThumbnail" to={`/series/${name}-${id}`}>
			<div className="Thumbnail">
				<div className="imageThumbnail">
					<img src={image}></img>
				</div>
				<h2 className="name">{name}</h2>
				<p className="title">Premiered : {premiered}</p>
				<div>{summary}</div>
				<p className="average">{average}</p>
			</div>
		</Link>
	);
};

SerieThumbnail.propTypes = {
	// name: PropTypes.string,
	/*video: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		thumbnail: PropTypes.string.isRequired,
	}).isRequired,*/
};
export default SerieThumbnail;
