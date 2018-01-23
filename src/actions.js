export const GETTING_REQUEST = "GET_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE";

export function gettingRequest() {
	return {
		type: GETTING_REQUEST
	};
}

export function getfilmsSuccess(data) {
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

export function requestFilmData() {
	return dispatch => {
		dispatch(gettingRequest());
		fetch("https://swapi.co/api/films/")
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then(json => {
				console.log(json);
				dispatch(getfilmsSuccess(json.results));
			})
			.catch(error => {
				dispatch(getRequestFailure(error));
			});
	};
}
