import getUsersController from "../controllers/getUsersController";
import createUserController from "../controllers/createUserController";
import getTasksController from '../controllers/getTasksController';

import { SET_USERS, SET_TASKS, ADD_TASK } from "./actionTypes";

const getUsers = () => {
    return async function(dispatch){
        const data = await getUsersController();
        dispatch({
            type: SET_USERS,
            payload: data.results
        })
    };
};
const getTasks = () => {
    return async function(dispatch){
        const data = await getTasksController();

        dispatch({
            type: SET_TASKS,
            payload:  data.results
        })
    }
}


//Create tasks
const createTasks = (user) => {
    return async function(dispatch){
        try {
            const response = await createUserController(user);
            const data = await response.json();
            dispatch({type: ADD_TASK, payload: data});
        } catch ({message}) {
            console.log(message);
        };
    };
};


export {
    getUsers,
    getTasks,
    createTasks
}