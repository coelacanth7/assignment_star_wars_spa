export const GETTING_REQUEST = "GET_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE";
export const GET_FILM_SUCCESS = "GET_FILM_SUCCESS";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_PLANETS_SUCCESS = "GET_PLANETS_SUCCESS";
export const GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS";
export const GET_SPECIES_SUCCESS = "GET_SPECIES_SUCCESS";

export function gettingRequest() {
	return {
		type: GETTING_REQUEST
	};
}

export function getFilmsSuccess(data) {
	return {
		type: GET_FILMS_SUCCESS,
		data
	};
}

export function getRequestFailure(error) {
	return {
		type: GET_REQUEST_FAILURE,
		error
	};
}

export function getFilmSuccess(data) {
	return {
		type: GET_FILM_SUCCESS,
		data
	};
}

export function getPeopleSuccess(data) {
	return {
		type: GET_PEOPLE_SUCCESS,
		data
	};
}

export function getPlanetsSuccess(data) {
	return {
		type: GET_PLANETS_SUCCESS,
		data
	};
}

export function getStarshipsSuccess(data) {
	return {
		type: GET_STARSHIPS_SUCCESS,
		data
	};
}

export function getSpeciesSuccess(data) {
	return {
		type: GET_SPECIES_SUCCESS,
		data
	};
}

export function _request(url, successCallback) {
	return dispatch => {
		dispatch(gettingRequest());
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then(json => {
				console.log("actions json response", json);
				dispatch(successCallback(json));
			})
			.catch(error => {
				dispatch(getRequestFailure(error));
			});
	};
}
