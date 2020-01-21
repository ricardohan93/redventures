import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./utils/context";

import Home from "./modules/Home";
import PlantForm from "./modules/PlantForm";
import PlantList from "./modules/PlantList";
import PlantDetails from "./modules/PlantDetails";

function App() {
	return (
		<ContextProvider>
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
		</ContextProvider>
	);
}

export default App;
