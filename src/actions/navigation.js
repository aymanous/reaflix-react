export const HISTORY_PUSH = 'HISTORY_PUSH';

export function push(screen, params) {
	return {
		type: HISTORY_PUSH,
		screen,
		params,
	};
}
