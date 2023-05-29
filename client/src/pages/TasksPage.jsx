import { useSelector } from "react-redux";
import CardTask from "../components/CardTask";

function TasksPage() {
    const tasks = useSelector(({tasks}) => tasks);

    return (
        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
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