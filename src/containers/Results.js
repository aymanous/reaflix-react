import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSeries } from '../actions/home';
import SerieThumbnail from './SerieThumbnail';
import { Link, NavLink } from 'react-router-dom';
import { fetchSeries } from '../actions/home';

class Results extends Component {
	SearchInput = null;

	state = {
		search: '',
		series: [],
		filter: 'pertinence_desc',
		loading: 'is-loading',
	};

	componentDidMount() {
		let search;
		if (this.props.match.params == null) {
			this.state.search = 'girls';
		} else {
			this.state.search = this.props.match.params.marecherche.toLowerCase();
		}

		this.fetchSeries(this.props.match.params.marecherche.toLowerCase());
	}

	fetchSeries(serieName) {
		this.props.fetchSeries(serieName).then(this.filter(this.state.filter));
	}

	handleChange = event => {
		let filter = event.target.value;
		this.setState({ filter: filter });
		this.filter(filter);
	};

	filter(filter) {
		console.log('enter in filter');
		console.log(this.state.filter);
		if (this.props.series == null) {
			return;
		}
		switch (filter) {
			case 'pertinence_desc':
				// pertinance desc
				this.props.series
					.sort(function (a, b) {
						return (
							parseFloat(a.score == null ? 0 : a.score) -
							parseFloat(b.score == null ? 0 : b.score)
						);
					})
					.reverse();
				break;

			case 'ranking_desc':
				// By rating
				this.props.series
					.sort(function (a, b) {
						return (
							parseFloat(
								a.show.rating.average == null ? 0 : a.show.rating.average
							) -
							parseFloat(
								b.show.rating.average == null ? 0 : b.show.rating.average
							)
						);
					})
					.reverse();
				break;

			case 'diffusion_asc':
				// by date asc
				this.props.series.sort(function (a, b) {
					return (
						parseFloat(a.show.premiered == null ? 0 : a.show.premiered) -
						parseFloat(b.show.premiered == null ? 0 : b.show.premiered)
					);
				});
				break;

			default:
				// pertinance desc
				this.state.series
					.sort(function (a, b) {
						return (
							parseFloat(a.score == null ? 0 : a.score) -
							parseFloat(b.score == null ? 0 : b.score)
						);
					})
					.reverse();
				break;
		}
	}

	handleSubmit(event) {
		this.setState({ loading: 'is-loading', search: this.SearchInput.value });
		event.preventDefault();

		history.pushState(
			{},
			null,
			'http://localhost:8000/resultats/' + this.SearchInput.value
		);

		this.fetchSeries(this.SearchInput.value.toLowerCase());
	}

	recherche() {
		return (
			<form className="videoForm" onSubmit={event => this.handleSubmit(event)}>
				<h2 className="search-title">Recherche :</h2>
				<input
					required
					type="text"
					id="search"
					ref={el => (this.SearchInput = el)}
				/>
				<select
					name="filter"
					onChange={this.handleChange}
					value={this.state.filter}
				>
					<option value="pertinence_desc">Pertinence &darr;</option>
					<option value="ranking_desc">Note &darr;</option>
					<option value="diffusion_asc">Date de diffusion &uarr;</option>
				</select>

				<button type="submit" className="button">
					Rechercher
				</button>
			</form>
		);
	}

	render() {
		const { search } = this.state;
		const { series } = this.props;

		if (!series) {
			return <div className="results-container "></div>;
		}

		return (
			<div>
				<h1>
					{series.length} résultats pour "{search.toUpperCase()}"
				</h1>
				{this.recherche()}
				<div className={`results-container`}>
					{series.map(serie => (
						<SerieThumbnail serie={serie} key={serie.show.id} />
					))}
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		series: state.series,
	}),
	{ fetchSeries }
)(Results);
