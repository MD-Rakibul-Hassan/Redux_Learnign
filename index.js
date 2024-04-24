// Initalize Actions //
const INCREMENT = "INCRIMENT";
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
		type: INCREMENT
	}
}
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