import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import serialize from "form-serialize";

import { _request, getPeopleSuccess } from "../actions";
import People from "../components/People";
const baseUrl = "https://swapi.co/api/people/";

class PeopleContainer extends Component {
	componentWillMount() {
		this.props.requestPeopleData();
	}

	render() {
		const {
			people,
			isFetching,
			getClickedPage,
			getSearchResults,
			clearSearchResults
		} = this.props;
		return (
			<People
				people={people}
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
		people: state.people,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestPeopleData: () => {
			dispatch(_request(baseUrl, getPeopleSuccess));
		},
		getClickedPage: e => {
			const page = e.target.name;
			console.log("page", page);
			dispatch(_request(page, getPeopleSuccess));
		},
		getSearchResults: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data from form", data);
			dispatch(_request(`${baseUrl}?search=${data.query}`, getPeopleSuccess));
		},
		clearSearchResults: e => {
			e.preventDefault();
			dispatch(_request(baseUrl, getPeopleSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
);
