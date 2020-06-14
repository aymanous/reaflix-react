import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSliderImages } from '../actions/home';

class Home extends Component {
	state = {
		sliderPath: null,
		sliderIndex: 0,
	};

	componentDidMount() {
		// this.props.getSliderImages();

		const images = [
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
		];

		this.initSlider(images);
	}

	initSlider(images) {
		this.changeImage(images[this.state.sliderIndex++ % images.length].src);
		setInterval(() => {
			this.changeImage(images[this.state.sliderIndex++ % images.length].src);
		}, 10000);
	}

	changeImage(path) {
		this.setState({
			sliderPath: path,
		});
	}

	handleNextImgClick() {
		this.changeImage(images[this.state.sliderIndex++ % images.length].src);
	}

	handlePreviousImgClick() {
		this.changeImage(images[this.state.sliderIndex-- % images.length].src);
	}

	render() {
		// const { images } = this.props;
		// const classNames = `home-slider ${images?.length ? '' : 'is-loading'}`;

		const classNames = `home-slider ${
			this.state.sliderPath != null ? '' : 'is-loading'
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
	{ getSliderImages }
)(Home);
