import { SERIE_COMPLETE } from '../actions/home';

export default function (state = null, action) {
	switch (action.type) {
		case SERIE_COMPLETE:
			return action.serie;
	}
	return state;
}
