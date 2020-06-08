// Liste Vidéos
export const VIDEO_LIST_COMPLETE = 'VIDEO_LIST_COMPLETE';
// Ajout video
export const POST_VIDEO_LOADING = 'POST_VIDEO_LOADING';
export const POST_VIDEO_COMPLETE = 'POST_VIDEO_COMPLETE';
// détail vidéo
export const VIDEO_COMPLETE = 'VIDEO_COMPLETE';
// liste commentaires
export const COMMENT_LIST_COMPLETE = 'COMMENT_LIST_COMPLETE';

const apiPath = 'http://localhost:8080/api';

export function fetchVideos() {
	return (dispatch, getState) =>
		fetch(`${apiPath}/videos`)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: VIDEO_LIST_COMPLETE,
					videos: data,
				});
			});
}

export function postVideo(title, description, thumbnail) {
	return (dispatch, getState) => {
		dispatch({ type: POST_VIDEO_LOADING });
		const body = JSON.stringify({
			title,
			description,
			thumbnail,
		});
		// on retourne la Promise pour que la vue puisse chaîner des traitements avec .then()
		return fetch(`${apiPath}/videos`, { method: 'POST', body })
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: POST_VIDEO_COMPLETE,
					video: data,
				});
				// on retourne les data pour que le .then de la vue récupère les infos
				// notamment l'id de la vidéo pour pouvoir faire une redirection vers la page détail
				return data;
			});
	};
}

export function fetchVideo(videoId) {
	return (dispatch, getState) =>
		fetch(`${apiPath}/videos/${videoId}`)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: VIDEO_COMPLETE,
					video: data,
				});
			});
}

export function fetchComments(videoId) {
	return (dispatch, getState) =>
		fetch(`${apiPath}/videos/${videoId}/comments`)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: COMMENT_LIST_COMPLETE,
					comments: data,
				});
			});
}

export function postComment(videoId, comment) {
	return (dispatch, getState) =>
		fetch(`${apiPath}/videos/${videoId}/comments`, {
			method: 'POST',
			body: JSON.stringify(comment),
		})
			.then(response => response.json())
			.then(data => dispatch(fetchComments(videoId)));
}

export function postLike(videoId) {
	return (dispatch, getState) =>
		fetch(`${apiPath}/videos/${videoId}/likes`, {
			method: 'POST',
		}).then(() => dispatch(fetchVideo(videoId)));
}
export function postDislike(videoId) {
	return (dispatch, getState) =>
		fetch(`${apiPath}/videos/${videoId}/dislikes`, {
			method: 'POST',
		}).then(() => dispatch(fetchVideo(videoId)));
}
