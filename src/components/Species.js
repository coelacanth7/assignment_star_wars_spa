import React from "react";
import Button from "./elements/Button";

const Species = ({
	species,
	isFetching,
	getClickedPage,
	getSearchResults,
	clearSearchResults
}) => {
	if (isFetching) {
		return <h1>Loading Species...</h1>;
	}

	console.log("species in Species.js", species);

	var previousPage = "";
	var nextPage = "";

	if (Object.keys(species).length) {
		if (species.previous) {
			previousPage = (
				<Button name={species.previous} onClick={getClickedPage}>
					previous
				</Button>
			);
		}
		if (species.next) {
			nextPage = (
				<Button name={species.next} onClick={getClickedPage}>
					next
				</Button>
			);
		}
	}

	let speciesCards = "";

	if (Object.keys(species).length) {
		speciesCards = species.results.map(species => (
			<div className="card" key={species.url}>
				<div className="card-body">
					<h1>{species.name}</h1>
					<dl>
						<dt>classification</dt>
						<dd>{species.classification}</dd>
						<dt>designation</dt>
						<dd>{species.designation}</dd>
						<dt>average_height</dt>
						<dd>{species.average_height}</dd>
						<dt>skin_colors</dt>
						<dd>{species.skin_colors}</dd>
						<dt>hair_colors</dt>
						<dd>{species.hair_colors}</dd>
						<dt>eye_colors</dt>
						<dd>{species.eye_colors}</dd>
						<dt>average_lifespan</dt>
						<dd>{species.average_lifespan}</dd>
						<dt>language</dt>
						<dd>{species.language}</dd>
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
			<h1>Species</h1>
			<div className="">{speciesCards}</div>
			<span>
				{previousPage}
				{"  "}
				{nextPage}
			</span>
		</div>
	);
};

export default Species;
