import React, { Component } from "react";
import { connect } from "react-redux";

import { _request, getFilmsSuccess } from "../actions";
import Films from "../components/Films";

class FilmsContainer extends Component {
	componentWillMount() {
		this.props.requestFilmsData();
	}

	render() {
		const { films, isFetching } = this.props;
		console.log("films in container", films);
		return <Films films={films} isFetching={isFetching} />;
	}
}

const mapStateToProps = state => {
	return {
		films: state.films.results,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestFilmsData: () => {
			dispatch(_request("https://swapi.co/api/films/", getFilmsSuccess));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);
