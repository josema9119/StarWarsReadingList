const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			onePeople: [],
			planets: [],
			onePlanet: [],

			},
		
		actions: {
			getPeople: async ()=>{
				const response = await fetch ("https://www.swapi.tech/api/people");
				const dataPeople = await response.json()
				setStore({ people: dataPeople.results });
			}, 
			getOnePeople: async (e) => {
				const response = await fetch("https://www.swapi.tech/api/people/" + e);
				const dataOnePeople = await response.json();
				setStore({
				  onePeople: { ...dataOnePeople.result.properties, uid: e },
				});
				console.log(onePeople)
			},
			
			getPlanets: async ()=>{
				const response = await fetch ("https://www.swapi.tech/api/planets");
				const dataPlanets = await response.json()
				setStore({planets: dataPlanets.results})
			},
			getOnePlanet: async (e) => {
				const response = await fetch("https://www.swapi.tech/api/planets/" + e);
				const dataOnePlanet = await response.json();				
				setStore({ onePlanet: { ...dataOnePlanet.result.properties, uid: e } });
		},

	},
};
};

export default getState;
