import {
	GETTING_REQUEST,
	GET_FILMS_SUCCESS,
	GET_REQUEST_FAILURE,
	GET_FILM_SUCCESS,
	GET_PEOPLE_SUCCESS,
	GET_PLANETS_SUCCESS,
	GET_STARSHIPS_SUCCESS
} from "./actions";

const initialState = {
	films: [],
	film: {},
	people: {},
	person: {},
	planets: {},
	starships: {},
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
		case GET_FILM_SUCCESS:
			return {
				...state,
				film: action.data,
				isFetching: false
			};
		case GET_PEOPLE_SUCCESS:
			return {
				...state,
				people: action.data,
				isFetching: false
			};
		case GET_PLANETS_SUCCESS:
			return {
				...state,
				planets: action.data,
				isFetching: false
			};
		case GET_STARSHIPS_SUCCESS:
			return {
				...state,
				starships: action.data,
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
