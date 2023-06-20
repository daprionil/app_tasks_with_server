import { useState } from "react";

import FormCardTask from './FormCardTask';
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateTask } from "../redux/createActions";
import { getDate } from "../utils/getDate";

function CardTask({title, description, status, UserName, id,createdAt, updatedAt}) {
    const [editMode, setEditMode] = useState(false);
    const dispatchRedux = useDispatch();

    //Styles
    const stylesStatus = {
        'suspended':'bg-slate-200',
        'pending':'bg-yellow-200',
        'completed':'bg-green-200',
        'rejected':'bg-red-200'
    }

    const handleEdit = () => setEditMode(mode => !mode);
    const handleChangeSelect = ({target:{value}}) => {
        dispatchRedux(updateTask({data:{status:value}, idTask:id}));
    };
    
    return (
        <div className={`${stylesStatus[status]} rounded shadow-all grid grid-cols-1 xs:grid-cols-5 md:grid-cols-1 overflow-hidden items-start`}>
            <p className={`w-full bg-slate-100 bg-opacity-70 font-semibold col-span-full h-fit text-center font-raleway`}>#{id} <span className="font-light">{status}</span></p>
            {
                !editMode ?
                    <div className={`col-span-auto xs:col-span-4 bg-opacity-40 p-4 font-poppins`}>
                        <div className="xs:flex text-stone-700 flex-nowrap border-b-4 border-slate-100  text-xl items-center gap-4 justify-between">
                            <NavLink className="hover:underline  justify-self-center py-1" to={`/tasks/${id}`}>{title}</NavLink>
                            <h2 className="drop-shadow-all"><span className="font-raleway font-bold">asignada a: </span>{UserName}</h2>
                        </div>
                        <p className="bg-white rounded-b bg-opacity-30 p-2 justify-self-center font-raleway py-1">{description}</p>
                    </div>
                : <FormCardTask {...{handleEdit,title,description,idTask:id}}/>
            }
            <div className={`p-4 col-span-1 font-poppins flex flex-col gap-2`}>
                <button className="py-1 px-3 rounded bg-blue-800 text-white font-semibold hover:scale-95 transition duration-200 hover:shadow-all hover:-hue-rotate-15 transform" onClick={handleEdit}>Editar</button>
                <select value={status} className="w-full p-1 rounded bg-slate-100 shadow-all text-center" onChange={handleChangeSelect}>
                    <option value="suspended">Suspendida</option>
                    <option value="pending">Pendiente</option>
                    <option value="rejected">Anulada</option>
                    <option value="completed">Completada</option>
                </select>
            </div>
            <div className="col-span-full px-4 py-2 flex flex-nowrap gap-2 items-center">
                <p className="text-xs"><span className="font-semibold font-raleway">Creada: </span>{getDate(createdAt)}</p>
                {
                    createdAt !== updatedAt && 
                    <p className="text-xs"><span className="font-semibold font-raleway">Actualizada: </span>{getDate(updatedAt)}</p>
                }
            </div>
        </div>
    );
}

export default CardTask;