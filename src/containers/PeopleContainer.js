import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { _request, getPeopleSuccess } from "../actions";
import People from "../components/People";

class PeopleContainer extends Component {
	componentWillMount() {
		this.props.requestPeopleData();
	}

	render() {
		const { people, isFetching, getClickedPage } = this.props;
		return (
			<People
				people={people}
				isFetching={isFetching}
				getClickedPage={getClickedPage}
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
			dispatch(_request("https://swapi.co/api/people/", getPeopleSuccess));
		},
		getClickedPage: e => {
			const page = e.target.name;
			console.log("page", page);
			dispatch(_request(page, getPeopleSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
);
