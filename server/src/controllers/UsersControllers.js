const { User, Task } = require('../db.js');

const getAUser = async (req,res) => {
    try {
        const {name} = req.params;

        //! GET user from database
        const [user] = await User.findAll({
            where:{
                name
            }
        });

        //! Validate SELECT database
        if(!user.dataValues) throw new Error('El usuario en solicitud no existe');
        
        const tasks = await Task.findAll({where:{UserId:user.dataValues.id}});

        //* Response with find user
        res.status(200).json({...user.dataValues, tasks});
    } catch ({message}) {
        res.status(400).json({error:message});
    };
};

const getAllUsers = async (req,res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({results:users});
    } catch ({message}) {
        res.status(400).json({error:message});
    }
};
const createUser = async (req,res) => {
    try {
        //* Extract values from body to Create USER
        console.log(req.body);
        const {name} = req.body;

        //! Validate data

        if(!validateName(name)) throw new Error(`El atributo name no cuenta con los parámetros válidos`);

        //? Create User
        const user = await User.create({name});

        //* Response with user created
        res.status(200).json({...user.dataValues});
    } catch ({message}) {
        res.status(400).json({error: message});
    };
};
const deleteUser = async (req,res) => {
    try {
        const {name} = req.params;
        
        //! Delete user - Not returns something
        await User.destroy({
            where:{
                name
            }
        });

        res.status(200).json({
            request:`El user: [${name}], se ha eliminado correctamente`
        });

    } catch ({message}) {
        res.status(400).json({error: message});
    };
};
const updateUser = async (req,res) => {
    try {
        //! Extract value from request
        const {name:nameParam} = req.params;
        const {name} = req.body;
        
        //* Validate data of name
        if(!validateName(name)) throw new Error(`El atributo name no cuenta con los parámetros válidos`);
        
        //? Update user in database
        const user = await User.update({name},{
            where:{
                name: nameParam
            }
        });

        res.status(200).json({
            request:`El elemento ${nameParam} se ha actualizado a ${name}`,
            id_user: user
        });
    } catch ({message}) {
        res.status(400).json({error: message});
    }
};

//? Functions
function validateName(name){
    return name &&
    name.length >= 4 &&
    name.length <= 20 &&
    !name.includes(' ');
};


module.exports = {
    getAUser,
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
}