import React from "react";
import Button from "./elements/Button";

const Starships = ({
	starships,
	isFetching,
	getClickedPage,
	getSearchResults,
	clearSearchResults
}) => {
	if (isFetching) {
		return <h1>Loading Starships...</h1>;
	}

	console.log("starships in Starships.js", starships);

	var previousPage = "";
	var nextPage = "";

	if (Object.keys(starships).length) {
		if (starships.previous) {
			previousPage = (
				<Button name={starships.previous} onClick={getClickedPage}>
					previous
				</Button>
			);
		}
		if (starships.next) {
			nextPage = (
				<Button name={starships.next} onClick={getClickedPage}>
					next
				</Button>
			);
		}
	}

	let starshipsCards = "";

	if (Object.keys(starships).length) {
		starshipsCards = starships.results.map(starship => (
			<div className="card" key={starship.url}>
				<div className="card-body">
					<h1>{starship.name}</h1>
					<dl>
						<dt>model</dt>
						<dd>{starship.model}</dd>
						<dt>manufacturer</dt>
						<dd>{starship.manufacturer}</dd>
						<dt>cost_in_credits</dt>
						<dd>{starship.cost_in_credits}</dd>
						<dt>length</dt>
						<dd>{starship.length}</dd>
						<dt>max_atmosphering_speed</dt>
						<dd>{starship.max_atmosphering_speed}</dd>
						<dt>crew</dt>
						<dd>{starship.crew}</dd>
						<dt>passengers</dt>
						<dd>{starship.passengers}</dd>
						<dt>cargo_capacity</dt>
						<dd>{starship.cargo_capacity}</dd>
						<dt>consumables</dt>
						<dd>{starship.consumables}</dd>
						<dt>hyperdrive_rating</dt>
						<dd>{starship.hyperdrive_rating}</dd>
						<dt>MGLT</dt>
						<dd>{starship.MGLT}</dd>
						<dt>starship_class</dt>
						<dd>{starship.starship_class}</dd>
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
			<h1>Starships</h1>
			<div className="">{starshipsCards}</div>
			<span>
				{previousPage}
				{"  "}
				{nextPage}
			</span>
		</div>
	);
};

export default Starships;
