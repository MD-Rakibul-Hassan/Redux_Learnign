
const { createStore, combineReducers } = require('redux');

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
const decrimentCounterAction = (value) => {
    return {
		type: DECRIMENT,
		payload:value,
	}
}

const addUser = (value) => {
    return {
        type: ADD_USER,
        payload : value,
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
				count: state.count - action.payload,
			};
		default:
			return state;
	}
};

const userReducer = (state = initalUser, action) => {
	if (action.type === ADD_USER) {
		return [...state.user,action.payload]
	}
	return state
};

// Store methods = getState(),dispatch(),subcribe()//
// CombineReducers 
const rootReducer = combineReducers({
	countR: counterReducer,
	userR:userReducer
})
// create store
const store = createStore(rootReducer);
// const store1 = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState())
})


// Dispatch Action //
store.dispatch(incrimentCounterAction())
store.dispatch(incrimentCounterAction())
store.dispatch(incrimentCounterAction())
store.dispatch(incrimentCounterAction())
store.dispatch(incrimentCounterAction())
store.dispatch(decrimentCounterAction(5))

store.dispatch(addUser({ name: "Shehab" }));
