import React, { Component } from 'react';
import CommentForm from '../components/CommentForm';
import CommentRenderer from '../components/CommentRenderer';
import { connect } from 'react-redux';
import {
	fetchVideo,
	fetchComments,
	postComment,
	postLike,
	postDislike,
} from '../actions/videos';
import { push } from '../actions/navigation';

class VideoDetail extends Component {
	player = null;

	componentDidMount() {
		this.fetchDetail();
		this.fetchComments();
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}

	fetchDetail() {
		this.props.fetchVideo(this.props.params.id);
	}

	fetchComments() {
		this.props.fetchComments(this.props.params.id);
	}

	render() {
		const { video, comments } = this.props;
		if (!video) {
			return <div className="videoDetail is-loading"></div>;
		}
		const { title, description, file, likes, dislikes } = video;
		return (
			<div className="videoDetail">
				<button className="backButton" onClick={() => this.props.push('list')}>
					&lt; Retour
				</button>
				<video
					style={{ width: '100%', backgroundColor: 'black' }}
					height="400"
					controls
					src={'./uploads/' + file}
					ref={el => (this.player = el)}
				></video>
				<button onClick={() => this.player.play()}>play</button>
				<button onClick={() => this.player.pause()}>pause</button>
				<header>
					<h1>{title}</h1>
					<div className="likesContainer">
						<button className="like" onClick={() => this.handleLikeClick()}>
							{likes}
						</button>
						<button
							className="dislike"
							onClick={() => this.handleDislikeClick()}
						>
							{dislikes}
						</button>
					</div>
				</header>
				{description && <p>{description}</p>}
				<aside className="commentList">
					{comments.length > 0 && <h2>{comments.length} commentaires</h2>}
					<CommentForm onSubmit={this.handleCommentSubmit} />
					{comments.map(comment => (
						<CommentRenderer comment={comment} key={comment.id} />
					))}
				</aside>
			</div>
		);
	}

	handleLikeClick() {
		this.props.postLike(this.props.params.id);
	}

	handleDislikeClick() {
		this.props.postDislike(this.props.params.id);
	}

	handleCommentSubmit(newComment) {
		return this.props.postComment(this.props.params.id, newComment);
	}
}
export default connect(
	state => ({
		video: state.video,
		comments: state.comments,
	}),
	{ fetchVideo, fetchComments, postComment, postLike, postDislike, push }
)(VideoDetail);
