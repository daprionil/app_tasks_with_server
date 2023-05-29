import { useDispatch, useSelector } from "react-redux";
import CardUser from "../components/CardUser";
import { useEffect } from "react";
import { getUsers } from "../redux/createActions";

function UsersPage() {
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());    
    },[]);

    return (
        <div className="p-2">
            <h1 className="text-center font-raleway font-bold text-2xl">Usuarios Creados</h1>
            <div className="grid gap-3 sm:grid-cols-2 grid-cols-1 items-center">
                {
                    Boolean(users.length) && users.map( (user) => (
                        <CardUser key={user.id} {...user}/>
                    ))
                }
            </div>
        </div>
    );
}

export default UsersPage;