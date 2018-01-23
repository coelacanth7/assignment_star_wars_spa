import React, { Component } from "react";
import { connect } from "react-redux";

import { _request, getFilmSuccess } from "../actions";
import Film from "../components/Film";

class FilmContainer extends Component {
	componentWillMount() {
		this.props.requestFilmData(this.props.id);
	}

	render() {
		const { film, isFetching } = this.props;
		return <Film film={film} isFetching={isFetching} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	return {
		film: state.film,
		isFetching: state.isFetching,
		id: ownProps.match.params.id
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestFilmData: id => {
			dispatch(_request(`https://swapi.co/api/films/${id}`, getFilmSuccess));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);
