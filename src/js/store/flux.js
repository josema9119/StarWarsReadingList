const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
			},
		
		actions: {
			getPeople: async ()=>{
				const response = await fetch ("https://www.swapi.tech/api/people/");
				const data = await response.json()
				setStore({people: data.results})
			}
		}

	};
};

export default getState;
