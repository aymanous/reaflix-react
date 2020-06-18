import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSerie, fetchEpisodes } from '../actions/home';

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
		if (!serie) {
			return <div className="serieDetail is-loading"></div>;
		}
		const { officialSite, id } = serie;
		return (
			<div className="serieDetail">
				<h1>{officialSite}</h1>
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
