import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import DetailsUserPage from "./pages/DetailsUser";
import DetailsTaskPage from "./pages/DetailsTaskPage";

function App() {
    return (
        <div className=" p-4 max-w-[1000px] mx-auto">
            <Header />
            <div className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    
                    {/* //!Tasks */}
                    <Route path="/tasks" element={<TasksPage/>} />
                    <Route path="/tasks/:idTask" element={<DetailsTaskPage />}/>

                    {/* //!Users */}
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/users/:idUser" element={<DetailsUserPage />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
