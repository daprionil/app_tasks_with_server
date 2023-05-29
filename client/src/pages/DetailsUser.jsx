import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import getAUserController from '../controllers/getAUserController';
import CardUser from "../components/CardUser";
import CardTask from '../components/CardTask';

function DetailsUserPage() {
    const { idUser } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getAUserController(idUser).then(data => {
            setUser(data);
        });
    },[]);

    return (  
        <div>
            {
                user.name && <CardUser vista {...user}/>
            }
            <h2 className="font-raleway py-3 border-b-2 border-stone-400 font-bold text-xl">Tareas del Usuario</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
                {
                    user.name && user.Tasks.map((task) => (
                        <CardTask key={task.id} {...task}/>
                    ))
                }
            </div>
        </div>
    );
};

export default DetailsUserPage;