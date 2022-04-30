const initialState = {
	Contracts: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CONTRACTS": {
			return {
				...state,
				Contracts:action.payload.contracts
			};
		}
		 default: {
      return state;
    }
	}
}

export default reducer;