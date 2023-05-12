//? If not exist a state, set initialState
const initialState = {
    tasks:[],
    users:[]
};

//* Reducer get all actions from dispatch
const rootReducer = function(state = initialState, {type, payload}){
    const typeFunction = ({
        SET_USERS: () => ({
            ...state,
            users: payload
        })
    })[type];
    return typeFunction ? typeFunction() : state;
};

export default rootReducer;