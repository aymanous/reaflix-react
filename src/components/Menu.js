import React from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';

export default function Menu() {
	return createPortal(
		<>
			<li>
				<NavLink exact to="/">
					Vidéos
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/videos/new">
					Ajouter
				</NavLink>
			</li>
		</>,
		document.querySelector('.mainMenu')
	);
}
