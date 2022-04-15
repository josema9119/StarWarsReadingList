const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			info: {}
			},
		
		actions: {
			getPeople: async ()=>{
				const response = await fetch ("https://www.swapi.tech/api/people");
				const data = await response.json()
				setStore({people: data.results})
			},
			getOnePeople: async ()=>{
				const response = await fetch ("https://www.swapi.tech/api/people/1");
				const data = await response.json()
				setStore({info: data.result.properties})
			}
		}

	};
};

export default getState;
