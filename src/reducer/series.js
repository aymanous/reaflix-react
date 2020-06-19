import { SERIES_COMPLETE } from '../actions/home';

export default function (state = null, action) {
	switch (action.type) {
		case SERIES_COMPLETE:
			return action.series;
	}
	return state;
}
