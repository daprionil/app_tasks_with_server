import { ADD_TASK, SET_TASKS,SET_USERS, UPDATE_TASK } from "./actionTypes";
//? If not exist a state, set initialState
const initialState = {
    tasks:[],
    users:[]
};

//* Reducer get all actions from dispatch
const rootReducer = function(state = initialState, {type, payload}){
    const typeFunction = ({
        [`${SET_USERS}`]: () => {
            return {
                ...state,
                users: payload
            }
        },
        [`${SET_TASKS}`]:() => ({
            ...state,
            tasks: payload
        }),
        [`${ADD_TASK}`]: () => ({
            ...state,
            tasks: [payload,...state.tasks]
        }),
        [`${UPDATE_TASK}`]: () => {
            const newTasks = state.tasks.map(task => {
                if(task.id === payload.idTask){
                    return {...task, ...payload.data, updatedAt: new Date().toISOString()}
                }
                return task;
            });
            return {
                ...state,
                tasks:newTasks
            };
        }
    })[type];
    return typeFunction ? typeFunction() : state;
};

export default rootReducer;