import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSerie, fetchEpisodes } from '../actions/home';
import EpisodeThumbnail from '../components/EpisodeThumbnail';

class Series extends Component {
	componentDidMount() {
		this.fetchSerie();
		this.fetchEpisodes();
	}

	fetchSerie() {
		this.props.fetchSerie(this.props.match.params.id);
	}

	fetchEpisodes() {
		this.props.fetchEpisodes(this.props.match.params.id);
	}

	render() {
		const { serie, episodes } = this.props;
		if (!serie || !episodes) {
			return <div className="serieDetail is-loading"></div>;
		}
		const {
			officialSite,
			image,
			name,
			language,
			genres,
			rating,
			summary,
		} = serie;

		episodes.reverse();

		return (
			<div className="serieDetail">
				<div className="headPage">
					<img className="serieCover" src={image.medium}></img>
					<div className="primaryInfos">
						<h2>{name}</h2>
						<p>
							<strong>Genre :</strong>{' '}
							{genres.map(genre => (
								<i key={genre}> {genre} </i>
							))}
						</p>
						<p>
							<strong>Rating : </strong>{' '}
							<b>
								<font color="#42FF33">{rating.average}</font>
							</b>
						</p>
						<p>
							<strong>Langue : </strong>
							{language}
						</p>
						<strong>Résumé : </strong>
						<div
							dangerouslySetInnerHTML={{
								__html: summary,
							}}
						></div>
						<p>
							<strong>Site Officiel : </strong>
							<a href={officialSite}>{officialSite}</a>
						</p>
					</div>
				</div>
				<div className="listeEpisode">
					{episodes.slice(0, 5).map(episode => (
						<EpisodeThumbnail episode={episode} key={episode.id} />
					))}
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		serie: state.serie,
		episodes: state.episodes,
	}),
	{ fetchSerie, fetchEpisodes }
)(Series);
