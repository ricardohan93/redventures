import React, { useReducer } from "react";

// const reducer = (state, action) => {
// 	return {
// 		FETCH: async function() {
// 			const { data } = await fetchPlants(action.data);
// 			console.log("results => ", data);
// 			return [...state, ...data];
// 		},
// 		default: ""
// 	}[action.type]();
// };

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH":
			return [...state, action.list];
		default:
			console.log("errorr");
	}
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
