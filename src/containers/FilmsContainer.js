import React, { Component } from "react";
import { connect } from "react-redux";

import { requestFilmData } from "../actions";
import Films from "../components/Films";

class FilmsContainer extends Component {
	componentWillMount() {
		this.props.requestFilmData();
	}

	render() {
		const { films, isFetching } = this.props;
		return <Films films={films} isFetching={isFetching} />;
	}
}

const mapStateToProps = state => {
	return {
		films: state.films,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestFilmData: () => {
			dispatch(requestFilmData());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);
