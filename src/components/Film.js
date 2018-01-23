import React from "react";
// import { Link } from "react-router-dom";

const Film = ({ film, isFetching }) => {
	if (isFetching) {
		return <h1>Loading film...</h1>;
	}

	console.log("film", film);

	if (film) {
		return (
			<div className="container-fluid">
				<h1>Film</h1>
				<div className="">
					<div className="card">
						<div className="card-body">
							<h1>{film.title}</h1>
							<h3>Epidode: {film.episode_id}</h3>
							<p>{film.opening_crawl}</p>
							<h5>Directed by: {film.director}</h5>
							<h6>Produced by: {film.producer}</h6>
							<h6>{film.release_date}</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Film;
