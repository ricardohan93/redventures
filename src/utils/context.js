import React, { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH":
			return action.list;
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
