import { HOME_SLIDER } from '../actions/home';

export default function (state = null, action) {
	switch (action.type) {
		case HOME_SLIDER:
			return action.images;
	}
	return state;
}
