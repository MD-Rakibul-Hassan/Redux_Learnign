
const { createStore } = require('redux');

// Initalize Actions //
const INCREMENT = "INCREMENT";
const DECRIMENT = "DECRIMENT";
const ADD_USER = "ADD_USER"

// States //
const initalCounter = {
    count:0
}

const initalUser = {
    user: [
        {
            name:"Rakibul hassan"
        }
    ]
}

// Actions = type,payload//
const incrimentCounterAction = () => {
	return {
		type: INCREMENT,
	};
};
const decrimentCounterAction = () => {
    return {
		type: DECRIMENT
	}
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload : {name: "Shehab"}
    }
}

// Reducer //
const counterReducer = (state = initalCounter, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case DECRIMENT:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
};

// Store methods = getState(),dispatch(),subcribe()//

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState(),"Subcribe")
})

// Dispatch Action //
store.dispatch(incrimentCounterAction())
store.dispatch(incrimentCounterAction())
store.dispatch(incrimentCounterAction())
store.dispatch(incrimentCounterAction())
store.dispatch(decrimentCounterAction())



