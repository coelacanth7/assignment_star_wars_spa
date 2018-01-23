import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import serialize from "form-serialize";

import { _request, getSpeciesSuccess } from "../actions";
import Species from "../components/Species";
const baseUrl = "https://swapi.co/api/species/";

class SpeciesContainer extends Component {
	componentWillMount() {
		this.props.requestSpeciesData();
	}

	render() {
		const {
			species,
			isFetching,
			getClickedPage,
			getSearchResults,
			clearSearchResults
		} = this.props;
		return (
			<Species
				species={species}
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
		species: state.species,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestSpeciesData: () => {
			dispatch(_request(baseUrl, getSpeciesSuccess));
		},
		getClickedPage: e => {
			const page = e.target.name;
			console.log("page", page);
			dispatch(_request(page, getSpeciesSuccess));
		},
		getSearchResults: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data from form", data);
			dispatch(_request(`${baseUrl}?search=${data.query}`, getSpeciesSuccess));
		},
		clearSearchResults: e => {
			e.preventDefault();
			dispatch(_request(baseUrl, getSpeciesSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(SpeciesContainer)
);
