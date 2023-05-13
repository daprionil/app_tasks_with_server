import { ADD_TASK, SET_TASKS,SET_USERS } from "./actionTypes";
//? If not exist a state, set initialState
const initialState = {
    tasks:[],
    users:[]
};

//* Reducer get all actions from dispatch
const rootReducer = function(state = initialState, {type, payload}){
    const typeFunction = ({
        [`${SET_USERS}`]: () => {
            const parseUsers = new Map(payload.map(task => {
                return [task.id, task]
            }))
            return {
                ...state,
                users: parseUsers
            }
        },
        [`${SET_TASKS}`]:() => ({
            ...state,
            tasks: payload.reverse()
        }),
        [`${ADD_TASK}`]: () => ({
            ...state,
            tasks: [payload,...state.tasks]
        })
    })[type];
    return typeFunction ? typeFunction() : state;
};

export default rootReducer;