import { useSelector } from "react-redux";
import CardTask from "../components/CardTask";

function TasksPage() {
    const tasks = useSelector(({tasks}) => tasks);

    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-1">
            <h1 className="font-raleway font-bold text-3xl drop-shadow-all md:col-span-2">Lista de Tareas</h1>
            {
                tasks.length && tasks.map( (task,i) => {
                    return <CardTask
                        {...task}
                        key={i}
                    />
                })
            }
        </div>
    );
}

export default TasksPage;