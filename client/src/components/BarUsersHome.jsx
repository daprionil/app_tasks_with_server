import { useContext} from "react";
import { useSelector } from "react-redux";
import { formContext, updateContext } from "../context/HomeProviderContext";
import UserCardHome from "./UserCardHome";

function BarUsersHome() {
    const [, dispatch] = useContext(formContext);
    const usersStore = useSelector(({users}) => users);

    const users = [...usersStore.values()];

    //! Handle Set Responsability Task
    const setUserAssignTask = ({id,name}) => {
        dispatch(updateContext({User:{id,name}}))
    };

    return (
        <div className=" mx-auto md:mx-none md:col-span-3 bg-main rounded-2xl py-4 px-3 text-center grid grid-cols-2 max-w-xl w-full md:max-w-none md:block shadow-all">
            <h1 className="font-quicksand font-black w-fit mx-auto md:text-md border-b-2 border-stone-400 col-span-2 text-lg">Usuarios actuales</h1>
            {
                users.length ? 
                    users.map( (user,i) => (
                        <UserCardHome
                            {...user}
                            setUserAssignTask={setUserAssignTask}
                            key={i}
                        />
                    ))
                : <p>No hay elementos</p>
            }
        </div>
    );
}

export default BarUsersHome;