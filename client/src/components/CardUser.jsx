import { useNavigate } from "react-router-dom";

function CardUser({id, name, Tasks, vista}) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/users/${name}`);
    };
    
    return (
        <div className="bg-stone-200 font-quicksand rounded-md overflow-hidden shadow-all">
            <div className="flex justify-between px-4 p-2">
                <h2 className="font-raleway font-bold text-xl">Usuario: <span className=" font-light">{name}</span></h2>
                <p className="font-poppins text-xl font-light bg-stone-500 px-4 text-white rounded-full [text-shadow:0_1px_5px_rgba(0,0,0,0.4)]"><span className=" font-medium">#</span> {id}</p>
            </div>
            <div className="flex items-center justify-around p-2 bg-stone-300">
                <p className=" text-lg"><span className="font-bold">Tareas Asignadas:</span> {Tasks.length} </p>
                <div>
                    {
                        !vista && <button className="btn bg-blue-500 text-white font-bold hover:shadow-all transition-all transform hover:scale-105 duration-200" onClick={handleClick}>Ver más</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default CardUser;