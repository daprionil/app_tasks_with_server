import getUsersController from "../controllers/getUsersController";
import createTasksController from "../controllers/createTasksController";
import getTasksController from '../controllers/getTasksController';

import { SET_USERS, SET_TASKS, ADD_TASK, UPDATE_TASK } from "./actionTypes";
import updateTaskController from "../controllers/updateTaskController";

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
            const response = await createTasksController(user);
            const data = await response.json();
            dispatch({type: ADD_TASK, payload: data});
        } catch ({message}) {
            console.log(message);
        };
    };
};

//Update Task
const updateTask = ({data,idTask}) => {
    return async function(dispatch){
        try {
            const response = await updateTaskController({data,idTask});
            dispatch({type: UPDATE_TASK, payload:{data:response.dataUpdated, idTask}});
        } catch ({message}) {
            console.log(message);
        };
    }
}


export {
    getUsers,
    getTasks,
    createTasks,
    updateTask
}