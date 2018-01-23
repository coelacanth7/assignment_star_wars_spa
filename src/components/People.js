import React from "react";

const People = ({ people, isFetching }) => {
	if (isFetching) {
		return <h1>Loading People...</h1>;
	}

	console.log("people in People.js", people);

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
			<h1>People</h1>
			<div className="">{peopleCards}</div>
		</div>
	);
};

export default People;
