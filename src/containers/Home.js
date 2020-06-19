import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	state = {
		sliderPath: null,
		sliderIndex: 0,
	};
	searchInput = null;
	images = [
		'https://www.demon-media.co.uk/wp-content/uploads/2017/12/Sammie-Hermiston-avengers-vs-justice-league.png',
		'https://c4.wallpaperflare.com/wallpaper/724/859/726/tv-series-black-background-mr-robot-circuits-wallpaper-preview.jpg',
		'https://i.imgur.com/uJHiPpX.jpg',
	];

	componentDidMount() {
		console.log(this.images.length);
		this.changeImage(
			this.images[this.state.sliderIndex++ % this.images.length]
		);

		setInterval(() => {
			this.changeImage(
				this.images[this.state.sliderIndex++ % this.images.length]
			);
		}, 3000);
	}

	changeImage(path) {
		this.setState({
			sliderPath: path,
		});
	}

	handleNextImgClick() {
		this.changeImage(
			this.images[this.state.sliderIndex++ % this.images.length]
		);
	}

	handlePreviousImgClick() {
		this.changeImage(
			this.images[this.state.sliderIndex-- % this.images.length]
		);
	}

	handleSubmit(event) {
		this.setState({ loading: 'is-loading' });
		event.preventDefault();

		this.props.history.push('/resultats/' + this.SearchInput.value);
	}

	render() {
		const classNames = `home-slider ${
			this.images.length == 0 ? 'is-loading' : ''
		}`;

		return (
			<div>
				<div
					className={classNames}
					style={{
						backgroundImage: `url(${this.state.sliderPath})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<div className="search">
					<form onSubmit={event => this.handleSubmit(event)}>
						<h2 className="search-title">Rechercher</h2>
						<input
							required
							type="text"
							id="search"
							ref={el => (this.SearchInput = el)}
						/>

						<button type="submit" className="button">
							Rechercher
						</button>
					</form>
				</div>

				<div className="slider-nav">
					<div onClick={() => this.handleNextImgClick()}>⮞</div>
					<div onClick={() => this.handlePreviousImgClick()}>⮜</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		images: state.images,
	}),
	{}
)(Home);
