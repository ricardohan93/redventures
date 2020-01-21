import React, { useReducer } from "react";
import { fetchPlants } from "services/plants";

const reducer = (state, action) => {
	console.log("deu dispatch");
	return {
		FETCH: async function() {
			console.log("entrou no FETCH");
			const { data } = await fetchPlants(action.data);
			console.log("results => ", data);
			return [...data];
		},
		default: ""
	}[action.type]();
};

const initialState = [];

const Context = React.createContext(initialState);

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
	);
};

export { Context, ContextProvider };
