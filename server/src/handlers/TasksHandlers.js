const getATasksController = require("../controllers/getATaskController.js");
const getAllTasksController = require("../controllers/getAllTasksController.js");
const createTaskController = require('../controllers/createTaskController.js');
const deleteTaskController = require('../controllers/deleteTaskController.js');
const updateTaskController = require('../controllers/updateTaskController.js');

const getAllTasks = async (req, res) => {
    try {
        const results = await getAllTasksController();
        
        res.status(200).json({results});
    } catch ({message}) {
        res.status(500).json({error:message});
    }
};

const getATask = async (req, res) => {
    try {
        const {id} = req.params;
        
        //! If the value not is an valid value to delete task
        if(isNaN(id)) throw new Error('No se ejecutó la acción; El valor no es un ID Válido');

        //? Delete a task
        const task = await getATasksController(id);
        console.log(task);

        res.status(200).json(task);
    } catch ({message}) {
        res.status(400).json({error:message});
    };
};

const createTask = async (req, res) => {
    try {
        const {title, description, UserId, status} = req.body;

        //! Validate data for new Task
        const tLen = title.trim().length;
        const validate = tLen >= 5 && tLen <= 100 && Number.isInteger(parseInt(UserId));

        if(!validate)throw new Error('Los campos no son válidos');

        
        //* Create task in DataBase
        const task = await createTaskController({
            title, description, UserId: Number(UserId),status
        });
        
        //? Response server
        res.status(200).json({...task});
    } catch ({message}) {
        console.log({message});
        res.status(400).json({error:message});
    };
};

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        
        //! If the value not is an valid value to delete task
        if(isNaN(id)) throw new Error('No se ejecutó la acción; El valor no es un ID Válido');

        //? Delete a task
        const del = await deleteTaskController(id);
        
        if(!del) throw new Error(`La tarea que intentas eliminar no existe`);

        res.status(200).json({request:"Eliminado correctamente"});

    } catch ({message}) {
        res.status(400).json({error:message});
    };
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const {title, description,status} = req.body;

        //! Validate data for new Task
        let tLen,validate = true;
        if(title){
            tLen = title.trim().length;
            validate = tLen >= 5 && tLen <= 100
        }

        if(!validate) throw new Error('Los campos no son válidos');

        //* Filter data to update
        const dataFiltrered = Object.entries({title, description, status}).reduce((init,[key,val])=>(
            val ? {...init, [key]: val} : init
        ),{});

        //? Update task
        const user = await updateTaskController({data:{...dataFiltrered}, id});

        if(!user) throw new Error(`No puedes actualizar, la tarea [${id}] no existe`);
        
        //! Response server with final status proccess
        res.status(200).json({request:"Actualizada correctamente", dataUpdated: dataFiltrered});
    } catch ({message}) {
        res.status(400).json({error:message});
    };
};

module.exports = {
    getATask,
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
}