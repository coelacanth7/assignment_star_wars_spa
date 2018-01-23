import React, { Component } from "react";
import "../App.css";
import JumbotronFluid from "./elements/JumbotronFluid";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch
} from "react-router-dom";

const NavLinks = () => (
	<div className="NavLinks">
		<NavLink activeClassName="active" exact to="/">
			Home
		</NavLink>
		{"  "}
		<NavLink activeClassName="active" exact to="/films">
			Films
		</NavLink>
		{"  "}
		<NavLink activeClassName="active" to="/people">
			People
		</NavLink>
		{"  "}
		<NavLink activeClassName="active" exact to="/planets">
			planets
		</NavLink>
		{"  "}
		<NavLink activeClassName="active" exact to="/starships">
			starships
		</NavLink>
		{"  "}
		<NavLink activeClassName="active" exact to="/species">
			species
		</NavLink>
		{"  "}
		<NavLink activeClassName="active" exact to="/vehicles">
			vehicles
		</NavLink>
		{"  "}
	</div>
);

const App = () => (
	<Router>
		<div>
			<JumbotronFluid
				heading="Star Wars Encyclopedia"
				lead="react, redux, router and SWAPI"
			/>
			<NavLinks />

			<Switch>
				<Route exact path="/" render={() => <h1>HOME</h1>} />
				<Route path="/films/:id" render={() => <h1>film id</h1>} />
				<Route path="/films" render={() => <h1>Films</h1>} />
				<Route path="/people/:id" render={() => <h1>people id</h1>} />
				<Route path="/people" render={() => <h1>People</h1>} />
				<Route path="/planets/:id" render={() => <h1>planets id</h1>} />
				<Route path="/planets" render={() => <h1>planets</h1>} />
				<Route path="/species/:id" render={() => <h1>species id</h1>} />
				<Route path="/species" render={() => <h1>species</h1>} />
				<Route path="/starships/:id" render={() => <h1>starships id</h1>} />
				<Route path="/starships" render={() => <h1>starships</h1>} />
				<Route path="/vehicles/:id" render={() => <h1>vehicles id</h1>} />
				<Route path="/vehicles" render={() => <h1>vehicles</h1>} />
				<Route render={() => <h1>Page not found</h1>} />
			</Switch>

			<NavLinks />
		</div>
	</Router>
);

export default App;
