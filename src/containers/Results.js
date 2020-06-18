import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSeries } from '../actions/home';
import SerieThumbnail from './SerieThumbnail';
import { Link, NavLink } from 'react-router-dom';

class Results extends Component {
	SearchInput = null;

	state = {
		search: '',
		series: [],
		filter: 'pertinance_desc',
		loading: 'is-loading',
	};

	componentDidMount() {
		let search;
		if (this.props.match.params == null) {
			search = 'girls';
		} else {
			search = this.props.match.params.marecherche.toLowerCase();
		}

		this.setState({ search: search, loading: 'is-loading' });

		fetch('http://api.tvmaze.com/search/shows?q=' + search)
			.then(response => response.json())
			.then(data => {
				this.setState({ series: data });
			})
			.then(this.filter(this.state.filter))
			.then(
				setTimeout(() => {
					this.setState({ loading: '' });
				}, 1000)
			);
	}

	handleChange = event => {
		let filter = event.target.value;
		this.setState({ filter: filter });
		this.filter(filter);
	};

	filter(filter) {
		switch (filter) {
			case 'pertinance_desc':
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

			case 'ranking_desc':
				// By rating
				this.state.series
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
				this.state.series.sort(function (a, b) {
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
		this.setState({ loading: 'is-loading' });
		event.preventDefault();
		/*this.props
			.postVideo(this.SearchInput.value)
			.then(({ id }) => this.props.push('detail', { id }));*/

		// searchSeries(this.SearchInput.value);

		history.pushState(
			{},
			null,
			'http://localhost:8000/resultats/' + this.SearchInput.value
		);

		fetch('http://api.tvmaze.com/search/shows?q=' + this.SearchInput.value)
			.then(response => response.json())
			.then(data => {
				this.setState({ series: data, search: this.SearchInput.value });
			})
			.then(this.filter(this.state.filter))
			.then(
				setTimeout(() => {
					this.setState({ loading: '' });
				}, 1000)
			);
	}

	render() {
		const { series, loading, search } = this.state;

		return (
			<div>
				<h1>Recherche pour "{search.toUpperCase()}"</h1>
				<form
					className="videoForm"
					onSubmit={event => this.handleSubmit(event)}
				>
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
						<option value="pertinance_desc">Pertinance &darr;</option>
						<option value="ranking_desc">Note &darr;</option>
						<option value="diffusion_asc">Date de diffusion &uarr;</option>
					</select>

					<button type="submit" className="button">
						Rechercher
					</button>
				</form>

				<div className={`results-container ${loading}`}>
					{series.map(serie => (
						<SerieThumbnail serie={serie} key={serie.show.id} />
					))}
				</div>
			</div>
		);
	}
}

export default connect(state => ({}), {})(Results);
