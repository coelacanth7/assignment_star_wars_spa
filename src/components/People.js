import React from "react";
import Button from "./elements/Button";

const People = ({ people, isFetching, getClickedPage }) => {
	if (isFetching) {
		return <h1>Loading People...</h1>;
	}

	console.log("people in People.js", people);

	var previousPage = "";
	var nextPage = "";

	if (Object.keys(people).length) {
		if (people.previous) {
			previousPage = (
				<Button name={people.previous} onClick={getClickedPage}>
					previous
				</Button>
			);
		}
		if (people.next) {
			nextPage = (
				<Button name={people.next} onClick={getClickedPage}>
					next
				</Button>
			);
		}
	}

	let peopleCards = "";

	if (Object.keys(people).length) {
		peopleCards = people.results.map(person => (
			<div className="card" key={person.url}>
				<div className="card-body">
					<h1>{person.name}</h1>
					<h3>Mass: </h3>
					<dl>
						<dt>Mass</dt>
						<dd>{person.mass}</dd>
						<dt>Height</dt>
						<dd>{person.height}</dd>
						<dt>hair_color</dt>
						<dd>{person.hair_color}</dd>
						<dt>skin_color</dt>
						<dd>{person.skin_color}</dd>
						<dt>eye_color</dt>
						<dd>{person.eye_color}</dd>
						<dt>birth_year</dt>
						<dd>{person.birth_year}</dd>
						<dt>gender</dt>
						<dd>{person.gender}</dd>
					</dl>
				</div>
			</div>
		));
	}

	return (
		<div className="container-fluid">
			<span>
				{previousPage}
				{"  "}
				{nextPage}
			</span>
			<h1>People</h1>
			<div className="">{peopleCards}</div>
			<span>
				{previousPage}
				{"  "}
				{nextPage}
			</span>
		</div>
	);
};

export default People;
