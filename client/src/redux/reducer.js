import {} from './actionTypes';

//? If not exist a state, set initialState
const initialState = {
    tasks:[],
    users:[]
};

//* Reducer get all actions from dispatch
const rootReducer = function(state = initialState, {action,type}){
    return state;
};

export default rootReducer;