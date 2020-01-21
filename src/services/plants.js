import axios from "axios";

// download env package and put in env file
const baseURL =
	"https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service";

export const fetchPlants = ({ sun, water, pets }) => {
	return axios.get(`${baseURL}?sun=${sun}&water=${water}&pets=${pets}`);
};
