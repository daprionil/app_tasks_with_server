import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import TasksPage from "./pages/TasksPage";

function App() {
    return (
        <div className=" p-4 max-w-[1000px] mx-auto">
            <Header />
            <div className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    
                    {/* //!Tasks */}
                    <Route path="/tasks" element={<TasksPage/>} />
                    <Route path="/tasks/:idTask" element={<p>Tarea 1</p>}/>

                    {/* //!Users */}
                    <Route path="/users" element={<p>users</p>} />
                    <Route path="/users/:idUser" element={<p>Usuario 1</p>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
