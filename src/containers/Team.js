import React, { Component } from 'react';
import { connect } from 'react-redux';

const Data = [
	{
		id: 1,
		url: '../images/team/ayman.jpg',
		name: 'OUSSAMA AYMAN',
		surnom: 'Le geek',
		seriePref: 'How I Met Your Mother',
		pourcentageNote: '25',
	},
	{
		id: 2,
		url: '../images/team/paul.jpg',
		name: 'KLAK PAUL',
		surnom: "L'animal",
		seriePref: 'Joséphine, ange gardien',
		pourcentageNote: '25',
	},
	{
		id: 3,
		url: '../images/team/leandre.jpg',
		name: 'CARPENTIER LEANDRE',
		surnom: 'Le ponctuel',
		seriePref: 'Des racines et des ailes',
		pourcentageNote: '25',
	},
	{
		id: 4,
		url: '../images/team/theo.jpg',
		name: 'GAILLARD THEO',
		surnom: 'Le chiant',
		seriePref: 'Vivement dimanche prochain',
		pourcentageNote: '25',
	},
];

class Team extends Component {
	render() {
		return (
			<div>
				{Data.map((value, index) => {
					return (
						<div className="card" key={value.id}>
							<div className="content">
								<img
									src={value.url}
									alt={value.name}
									style={{ width: '100%' }}
								/>
								<div className="infos">
									<h2 className="name">{value.name}</h2>
									<p className="title">{value.surnom}</p>
									<p>Mon coup de coeur: {value.seriePref}</p>
									<p>{value.pourcentageNote}% de la note finale</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default connect(state => ({}), {})(Team);
