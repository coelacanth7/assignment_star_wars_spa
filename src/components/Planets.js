import React from "react";
import Button from "./elements/Button";

const Planets = ({
	planets,
	isFetching,
	getClickedPage,
	getSearchResults,
	clearSearchResults
}) => {
	if (isFetching) {
		return <h1>Loading Planets...</h1>;
	}

	console.log("planets in Planets.js", planets);

	var previousPage = "";
	var nextPage = "";

	if (Object.keys(planets).length) {
		if (planets.previous) {
			previousPage = (
				<Button name={planets.previous} onClick={getClickedPage}>
					previous
				</Button>
			);
		}
		if (planets.next) {
			nextPage = (
				<Button name={planets.next} onClick={getClickedPage}>
					next
				</Button>
			);
		}
	}

	let planetsCards = "";

	if (Object.keys(planets).length) {
		planetsCards = planets.results.map(planet => (
			<div className="card" key={planet.url}>
				<div className="card-body">
					<h1>{planet.name}</h1>
					<dl>
						<dt>rotation_period</dt>
						<dd>{planet.rotation_period}</dd>
						<dt>orbital_period</dt>
						<dd>{planet.orbital_period}</dd>
						<dt>diameter</dt>
						<dd>{planet.diameter}</dd>
						<dt>climate</dt>
						<dd>{planet.climate}</dd>
						<dt>gravity</dt>
						<dd>{planet.gravity}</dd>
						<dt>terrain</dt>
						<dd>{planet.terrain}</dd>
						<dt>surface_water</dt>
						<dd>{planet.surface_water}</dd>
						<dt>population</dt>
						<dd>{planet.population}</dd>
					</dl>
				</div>
			</div>
		));
	}

	return (
		<div className="container-fluid">
			<form onSubmit={getSearchResults}>
				<div className="form-row">
					<div className="col">
						<input
							type="text"
							name="query"
							className="form-control"
							placeholder="search..."
						/>
					</div>
					<div className="col">
						<input type="submit" className="form-control btn btn-success" />
					</div>
					<div className="col">
						<input
							type="button"
							className="form-control btn btn-success"
							value="clear search"
							onClick={clearSearchResults}
						/>
					</div>
				</div>
			</form>
			<span>
				{previousPage}
				{"  "}
				{nextPage}
			</span>
			<h1>Planets</h1>
			<div className="">{planetsCards}</div>
			<span>
				{previousPage}
				{"  "}
				{nextPage}
			</span>
		</div>
	);
};

export default Planets;
