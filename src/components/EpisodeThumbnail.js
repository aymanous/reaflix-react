import React from 'react';
import PropTypes from 'prop-types';

export default function EpisodeThumbnail({
	episode: { id, name, airdate, summary, image },
	imageFinale = image == null ? '../images/no_image.jpg' : image.medium,
}) {
	return (
		<div className="episodeThumbnail">
			<div className="imageEpisodeThumbnail">
				<img src={imageFinale}></img>
			</div>
			<div className="infosEpisode">
				<h2 className="name">{name}</h2>
				<p className="title">Première sortie : {airdate}</p>
				<em>
					Passez votre souris dans le cadre pour afficher la description de
					l'épisode.
				</em>
				<div className="spoilAlert">
					<div
						className="summary"
						dangerouslySetInnerHTML={{
							__html: summary,
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
