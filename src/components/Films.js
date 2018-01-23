import React from "react";
import { Link } from "react-router-dom";

const Films = ({ films, isFetching }) => {
	if (isFetching) {
		return <h1>Loading films...</h1>;
	}

	console.log("films", films);

	let filmCards = "";

	if (films) {
		filmCards = films.map(film => (
			<div className="card" key={film.episode_id}>
				<div className="card-body">
					{/* the film episode_id is not the same as url */}
					<Link to={`/films/${/\d/.exec(film.url)}`}>
						<h1>{film.title}</h1>
						<h3>Epidode: {film.episode_id}</h3>
					</Link>
				</div>
			</div>
		));
	}

	return (
		<div className="container-fluid">
			<h1>Films</h1>
			<div className="">{filmCards}</div>
		</div>
	);
};

export default Films;
