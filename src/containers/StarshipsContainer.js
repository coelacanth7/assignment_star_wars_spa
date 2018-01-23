import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import serialize from "form-serialize";

import { _request, getStarshipsSuccess } from "../actions";
import Starships from "../components/Starships";
const baseUrl = "https://swapi.co/api/starships/";

class StarshipsContainer extends Component {
	componentWillMount() {
		this.props.requestStarshipsData();
	}

	render() {
		const {
			starships,
			isFetching,
			getClickedPage,
			getSearchResults,
			clearSearchResults
		} = this.props;
		return (
			<Starships
				starships={starships}
				isFetching={isFetching}
				getClickedPage={getClickedPage}
				getSearchResults={getSearchResults}
				clearSearchResults={clearSearchResults}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		starships: state.starships,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestStarshipsData: () => {
			dispatch(_request(baseUrl, getStarshipsSuccess));
		},
		getClickedPage: e => {
			const page = e.target.name;
			console.log("page", page);
			dispatch(_request(page, getStarshipsSuccess));
		},
		getSearchResults: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data from form", data);
			dispatch(
				_request(`${baseUrl}?search=${data.query}`, getStarshipsSuccess)
			);
		},
		clearSearchResults: e => {
			e.preventDefault();
			dispatch(_request(baseUrl, getStarshipsSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(StarshipsContainer)
);
