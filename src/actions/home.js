export const HOME_SLIDER = 'HOME_SLIDER';
export const SERIES_COMPLETE = 'SERIES_COMPLETE';

export function getSliderImages() {
	return (dispatch, getState) => {
		const action = {
			type: HOME_SLIDER,
			images: [
				{
					label: 'Hello',
					src:
						'https://lh3.googleusercontent.com/proxy/ABi3qf4heA_gF3uaBN5NdLhir-lN6KQ8fcBdaLAUFpQeVlsL5TjBM2Arkju9XMO8LE48qCWIbriFvumKUMRojphhBizNQK0uaZ8MPBrAPLA4g72XBiAcWfND4D8D9gefl5WZiHZ1vtLL',
				},
				{
					label: 'Hello',
					src:
						'https://www.demon-media.co.uk/wp-content/uploads/2017/12/Sammie-Hermiston-avengers-vs-justice-league.png',
				},
				{
					label: 'Hello',
					src:
						'https://c4.wallpaperflare.com/wallpaper/724/859/726/tv-series-black-background-mr-robot-circuits-wallpaper-preview.jpg',
				},
				{
					label: 'Hello',
					src: 'https://i.imgur.com/uJHiPpX.jpg',
				},
			],
		};
		dispatch(action);
	};
}

// LVL 1 request
// export function searchSeries(search) {
// 	fetch('http://api.tvmaze.com/search/shows?q=' + search)
// 		.then(response => response.json())
// 		.then(data => {
// 			return data;
// 		});
// }

export function fetchSeries(search) {
	return (dispatch, getState) =>
		fetch('http://api.tvmaze.com/search/shows?q=' + search)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: SERIES_COMPLETE,
					series: data,
				});
			});
}
