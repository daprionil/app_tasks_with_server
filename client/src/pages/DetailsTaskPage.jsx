import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getATaskController from "../controllers/getATaskController";
import { getDate } from "../utils/getDate";

function DetailsTaskPage() {
    const {idTask} = useParams();
    const [task,setTask] = useState();

    const stylesStatus = {
        'suspended':'bg-slate-200',
        'pending':'bg-yellow-200',
        'completed':'bg-green-200',
        'rejected':'bg-red-200'
    };

    //! Get task
    useEffect(() => {
        console.log(task);
        getATaskController(idTask).then(setTask);
    },[]);

    return (
        <>
            {
                task && <div className={`${stylesStatus[task.status]} overflow-hidden rounded shadow-all`}>
                    <div className="flex items-center bg-stone-300 bg-opacity-60">
                        <p className=" whitespace-nowrap bg-white bg-opacity-30 h-full p-2 font-quicksand font-semibold text-sm text-center">{task.status} #{task.id}</p>
                        <p className="px-2 font-poppins text-right w-full">
                            <span>Asignado a: </span>
                            <span className="uppercase border-r-2 pr-2 border-stone-600 font-bold"> {task.User.name}</span>
                            <span> #{task.User.id}</span>
                        </p>
                    </div>
                    <p className="font-poppins text-center p-2 border-t-2 border-opacity-30 border-stone-800"><span className="font-semibold">Asunto: </span>{task.title}</p>
                    <p className="text-center p-2 font-quicksand bg-white bg-opacity-50 border-t-4 border-white border-opacity-50">{task.description}</p>
                    <div className="flex p-2 items-center justify-around bg-stone-300 bg-opacity-30 font-quicksand text-sm">
                        <p className="whitespace-nowrap drop-shadow-sm"><span className="font-semibold">Creada: </span>{getDate(task.createdAt)}</p>
                        <p className="whitespace-nowrap drop-shadow-sm"><span className="font-semibold">Ultima Actualización: </span>{getDate(task.updatedAt)}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default DetailsTaskPage;