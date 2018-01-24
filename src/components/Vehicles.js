import React from "react";
import Button from "./elements/Button";

const Vehicles = ({
	vehicles,
	isFetching,
	getClickedPage,
	getSearchResults,
	clearSearchResults
}) => {
	if (isFetching) {
		return <h1>Loading Vehicles...</h1>;
	}

	console.log("vehicles in Vehicles.js", vehicles);

	var previousPage = "";
	var nextPage = "";

	if (Object.keys(vehicles).length) {
		if (vehicles.previous) {
			previousPage = (
				<Button name={vehicles.previous} onClick={getClickedPage}>
					previous
				</Button>
			);
		}
		if (vehicles.next) {
			nextPage = (
				<Button name={vehicles.next} onClick={getClickedPage}>
					next
				</Button>
			);
		}
	}

	let vehiclesCards = "";

	if (Object.keys(vehicles).length) {
		vehiclesCards = vehicles.results.map(vehicle => (
			<div className="card" key={vehicle.url}>
				<div className="card-body">
					<h1>{vehicle.name}</h1>
					<dl>
						<dt>model</dt>
						<dd>{vehicle.model}</dd>
						<dt>manufacturer</dt>
						<dd>{vehicle.manufacturer}</dd>
						<dt>cost_in_credits</dt>
						<dd>{vehicle.cost_in_credits}</dd>
						<dt>length</dt>
						<dd>{vehicle.length}</dd>
						<dt>max_atmosphering_speed</dt>
						<dd>{vehicle.max_atmosphering_speed}</dd>
						<dt>crew</dt>
						<dd>{vehicle.crew}</dd>
						<dt>passengers</dt>
						<dd>{vehicle.passengers}</dd>
						<dt>cargo_capacity</dt>
						<dd>{vehicle.cargo_capacity}</dd>
						<dt>consumables</dt>
						<dd>{vehicle.consumables}</dd>
						<dt>vehicle_class</dt>
						<dd>{vehicle.vehicle_class}</dd>
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
			<h1>Vehicles</h1>
			<div className="">{vehiclesCards}</div>
			<span>
				{previousPage}
				{"  "}
				{nextPage}
			</span>
		</div>
	);
};

export default Vehicles;
