import React, { Component } from 'react';

export default class CommentsForm extends Component {
	state = {
		content: '',
		isLoading: false,
	};
	constructor(...args) {
		super(...args);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		const { content, isLoading } = this.state;
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<textarea
					value={content}
					onChange={this.handleInputChange}
					name="content"
					rows="2"
					disabled={isLoading}
					placeholder="Ajouter un commentaire public"
				/>
				<button type="submit" disabled={isLoading}>
					{!isLoading ? 'Envoyer' : 'Envoi en cours...'}
				</button>
			</form>
		);
	}
	handleInputChange(event) {
		event.preventDefault();
		this.setState({ content: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();

		const newComment = { content: this.state.content };
		this.setState({ isLoading: true });
		this.props
			.onSubmit(newComment)
			.then(() => this.setState({ isLoading: false, content: '' }));
	}
}
