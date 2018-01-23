import {
	GETTING_REQUEST,
	GET_FILMS_SUCCESS,
	GET_REQUEST_FAILURE
} from "./actions";

const initialState = {
	films: [],
	film: {},
	isFetching: false,
	error: null
};

export function SWReducer(state = initialState, action) {
	switch (action.type) {
		case GETTING_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case GET_FILMS_SUCCESS:
			return {
				...state,
				films: action.data,
				isFetching: false
			};
		case GET_REQUEST_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}
