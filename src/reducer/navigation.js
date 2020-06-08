import { HISTORY_PUSH } from '../actions/navigation';

const defaultState = {
	screen: 'list',
	params: {},
};

export default function (state = defaultState, action) {
	if (action.type == HISTORY_PUSH) {
		return {
			...state,
			screen: action.screen,
			params: action.params,
		};
	}
	return state;
}
