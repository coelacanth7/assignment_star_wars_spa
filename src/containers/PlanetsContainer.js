import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import serialize from "form-serialize";

import { _request, getPlanetsSuccess } from "../actions";
import Planets from "../components/Planets";
const baseUrl = "https://swapi.co/api/planets/";

class PlanetsContainer extends Component {
	componentWillMount() {
		this.props.requestPlanetsData();
	}

	render() {
		const {
			planets,
			isFetching,
			getClickedPage,
			getSearchResults,
			clearSearchResults
		} = this.props;
		return (
			<Planets
				planets={planets}
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
		planets: state.planets,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestPlanetsData: () => {
			dispatch(_request(baseUrl, getPlanetsSuccess));
		},
		getClickedPage: e => {
			const page = e.target.name;
			console.log("page", page);
			dispatch(_request(page, getPlanetsSuccess));
		},
		getSearchResults: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data from form", data);
			dispatch(_request(`${baseUrl}?search=${data.query}`, getPlanetsSuccess));
		},
		clearSearchResults: e => {
			e.preventDefault();
			dispatch(_request(baseUrl, getPlanetsSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer)
);
