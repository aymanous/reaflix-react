import { EPISODES_COMPLETE } from '../actions/home';

export default function (state = null, action) {
	switch (action.type) {
		case EPISODES_COMPLETE:
			return action.episodes;
	}
	return state;
}
