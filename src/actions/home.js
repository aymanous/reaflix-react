export const HOME_SLIDER = 'HOME_SLIDER';
export const SERIE_COMPLETE = 'SERIE_COMPLETE';
export const EPISODES_COMPLETE = 'EPISODES_COMPLETE';

const apiPath = 'http://api.tvmaze.com';

export function fetchSerie(serieId) {
	return (dispatch, getState) =>
		fetch(`${apiPath}/shows/${serieId}`)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: SERIE_COMPLETE,
					serie: data,
				});
			});
}

export function fetchEpisodes(serieId) {
	return (dispatch, getState) =>
		fetch(`${apiPath}/shows/${serieId}/episodes`)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: EPISODES_COMPLETE,
					episodes: data,
				});
			});
}

// LVL 1 request
export function searchSeries(search) {
	fetch('http://api.tvmaze.com/search/shows?q=' + search)
		.then(response => response.json())
		.then(data => {
			return data;
		});
}
