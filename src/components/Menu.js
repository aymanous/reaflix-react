import React from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';

export default function Menu() {
	return createPortal(
		<>
			<li>
				<NavLink exact to="/">
					Accueil
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/lequipe.fr">
					L'équipe
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/choix-technologiques">
					Choix
				</NavLink>
			</li>
		</>,
		document.querySelector('.mainMenu')
	);
}
