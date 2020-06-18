import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Team from './Team';
import TechChoices from './TechChoices';
import Results from './Results';
import Serie from './Serie';

class Navigator extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/lequipe.fr" component={Team} />
				<Route exact path="/choix-technologiques" component={TechChoices} />
				<Route exact path="/resultats/:marecherche" component={Results} />
				<Route exact path="/series/:nomdelaserie-:id" component={Serie} />
			</Switch>
		);
	}
}

export default connect(state => ({
	navigation: state.navigation,
}))(Navigator);
