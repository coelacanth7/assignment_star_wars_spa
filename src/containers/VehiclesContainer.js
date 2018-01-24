import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import serialize from "form-serialize";

import { _request, getVehiclesSuccess } from "../actions";
import Vehicles from "../components/Vehicles";
const baseUrl = "https://swapi.co/api/vehicles/";

class VehiclesContainer extends Component {
	componentWillMount() {
		this.props.requestVehiclesData();
	}

	render() {
		const {
			vehicles,
			isFetching,
			getClickedPage,
			getSearchResults,
			clearSearchResults
		} = this.props;
		return (
			<Vehicles
				vehicles={vehicles}
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
		vehicles: state.vehicles,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestVehiclesData: () => {
			dispatch(_request(baseUrl, getVehiclesSuccess));
		},
		getClickedPage: e => {
			const page = e.target.name;
			console.log("page", page);
			dispatch(_request(page, getVehiclesSuccess));
		},
		getSearchResults: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data from form", data);
			dispatch(_request(`${baseUrl}?search=${data.query}`, getVehiclesSuccess));
		},
		clearSearchResults: e => {
			e.preventDefault();
			dispatch(_request(baseUrl, getVehiclesSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(VehiclesContainer)
);
