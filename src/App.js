import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/plant-form'>
					<PlantForm />
				</Route>
				<Route path='/plant-list'>
					<PlantList />
				</Route>
				<Route path='/plant/:id'>
					<PlantDetails />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
