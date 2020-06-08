import React, { Component } from 'react';
import { postVideo } from '../actions/videos';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

class VideoForm extends Component {
	titleInput = null;
	descriptionInput = null;
	thumbnailInput = null;

	handleSubmit(event) {
		event.preventDefault();
		this.props
			.postVideo(
				this.titleInput.value,
				this.descriptionInput.value,
				this.thumbnailInput.value
			)
			.then(({ id }) => this.props.push(`/videos/${id}`));
	}

	render() {
		return (
			<form className="videoForm" onSubmit={event => this.handleSubmit(event)}>
				<label htmlFor="title">Titre</label>
				<input
					required
					type="text"
					id="title"
					ref={el => (this.titleInput = el)}
				/>
				<label htmlFor="description">Description</label>
				<textarea
					required
					id="description"
					cols="30"
					rows="10"
					ref={el => (this.descriptionInput = el)}
				></textarea>
				<label htmlFor="thumbnail">
					Vignette
					<small>
						&nbsp;id de l'image sur &nbsp;
						<a href="https://unsplash.com" target="_blank">
							https://unsplash.com
						</a>
					</small>
				</label>
				<input
					required
					type="text"
					id="thumbnail"
					ref={el => (this.thumbnailInput = el)}
				/>
				<button type="submit" disabled={this.props.isLoading}>
					{!this.props.isLoading ? 'Envoyer' : 'Loading...'}
				</button>
			</form>
		);
	}
}
export default connect(
	state => ({
		isLoading: state.newVideo.isLoading,
	}),
	{ postVideo, push }
)(VideoForm);
