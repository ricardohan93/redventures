import axios from "axios";

// download env package and put in env file
const baseURL =
	"https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service";

export const fetchPlants = ({ sun, water, pets }) => {
	console.log("TÁ COMENTADO O FETCHPLANTS");
	// return axios.get(
	// 	`${baseURL}?sun=${sun}&water=${water}&pets=${Boolean(pets)}`
	// );
};

export const fetchPlantDetails = ({ id }) => {
	return {
		data: {
			id: 5,
			name: "Bamboo",
			sun: "low",
			url: "https://front-static-recruitment.s3.amazonaws.com/lucky-bamboo.jpg",
			water: "regularly",
			price: 15,
			toxicity: false
		}
	};
	// return axios.get(`${baseURL}/plant?id=${id}`);
};
