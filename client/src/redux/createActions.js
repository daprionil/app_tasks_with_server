import getUsersController from "../controllers/getUsersController";
import { SET_USERS } from "./actionTypes";

const getUsers = () => {
    return async function(dispatch){
        const data = await getUsersController();
        dispatch({
            type: SET_USERS,
            payload: data.results
        })
    };
};

export {
    getUsers
}