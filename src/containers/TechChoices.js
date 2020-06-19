import React, { Component } from 'react';
import { connect } from 'react-redux';

class TechChoices extends Component {
	render() {
		return (
			<div className="techChoices">
				<h1>Choix techniques</h1>
				<p>
					Concernant le coeur même de l'application nous avons décidé de partir
					de la correction du TP REACTUBE afin d'utiliser la même architecture.
					De ce fait, le store choisi est exactement le même que celui des
					derniers TP.
				</p>
				<p>
					Nous avons donc utilisé Redux pour centraliser les données, les
					actions et permettre l'utilisation du store.
				</p>
				<p>
					Concernant l'API nous avons suivi les conseils donnés dans le sujet et
					nous avons opté pour l'API de TVMaze.
				</p>
				<p>
					<b>Nous avons utilisé les librairies suivantes:</b>
				</p>
				<div className="lib">
					<p>React: 16.13.1</p>
					<p>React Routeur: 5.2</p>
					<p>React Redux : 7.2.0</p>
				</div>

				<div className="filesOrganisation">
					<h2>Organisation des fichiers</h2>
					<p>css</p>
					<p>images</p>
					<p>server</p>
					<p>src</p>
					<p>&ensp;|_ actions</p>
					<p>&ensp;&ensp;&ensp;|_ home.js</p>
					<p>&ensp;|_ components</p>
					<p>&ensp;&ensp;&ensp;|_ Menu.js</p>
					<p>&ensp;&ensp;&ensp;|_ Searchbar.js</p>
					<p>&ensp;|_ containers</p>
					<p>&ensp;&ensp;&ensp;|_ Home.js</p>
					<p>&ensp;&ensp;&ensp;|_ Navigator.js</p>
					<p>&ensp;&ensp;&ensp;|_ Results.js</p>
					<p>&ensp;&ensp;&ensp;|_ Serie.js</p>
					<p>&ensp;&ensp;&ensp;|_ SerieThumbnail.js</p>
					<p>&ensp;&ensp;&ensp;|_ Team.js</p>
					<p>&ensp;&ensp;&ensp;|_ TechChoices.js</p>
					<p>&ensp;|_ reducer</p>
					<p>&ensp;&ensp;&ensp;|_ home.js</p>
					<p>&ensp;&ensp;&ensp;|_ index.js</p>
					<p>&ensp;|_ store</p>
					<p>&ensp;&ensp;&ensp;|_ configureStore.js</p>
					<p>&ensp;|_ app.js</p>
					<p>index.html</p>
				</div>
				<div className="design">
					<h2>Design de l'application</h2>
					<p>
						Concernant le design de l'application, nous avons tout réalisé à la
						main pour garder un design simple et propre. Notre devise: Keep it
						simple and stupid
					</p>
				</div>
			</div>
		);
	}
}

export default connect(state => ({}), {})(TechChoices);
