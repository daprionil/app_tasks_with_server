const { Task } = require('../db.js');

const getAllTasks = async (req, res) => {
    try {
        const response = await Task.findAll();
        res.status(200).json({results:response});
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
        const task = await Task.findAll({
            where:{id}
        });

        //! Validate response from database
        if(!task.length) throw new Error('Tarea no encontrada');

        res.status(200).json(task[0]);
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
        const task = await Task.create({
            title, description, UserId: Number(UserId),status
        });
        
        //? Response server
        res.status(200).json({...task.dataValues});
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
        const del = await Task.destroy({
            where:{id}
        });
        
        if(!del) throw new Error(`La tarea que intentas eliminar no existe`);

        res.status(200).json({request:"Eliminado correctamente"});

    } catch ({message}) {
        res.status(400).json({error:message});
    };
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const {title, description} = req.body;

        //! Validate data for new Task
        const tLen = title.trim().length;
        const validate = tLen >= 5 && tLen <= 100;

        if(!validate) throw new Error('Los campos no son válidos');

        //* Filter data to update
        const dataFiltrered = Object.entries({title, description}).reduce((init,[key,val])=>(
            val ? {...init, [key]: val} : init
        ),{});

        //? Update task
        const user = await Task.update({...dataFiltrered},{
            where:{id}
        });

        if(!user[0]) throw new Error(`No puedes actualizar, la tarea [${id}] no existe`);

        //! Response server with final status proccess
        res.status(200).json({request:"Actualizada correctamente"});
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