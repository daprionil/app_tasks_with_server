const createUserController = require('../controllers/createUserController.js');
const deleteUserController = require('../controllers/deleteUserController.js');
const getAUserController = require('../controllers/getAUserController.js');
const getAllUsersController = require('../controllers/getAllUsersController.js');
const getTasksByUser = require('../controllers/getTasksByUser.js');
const updateUserController = require('../controllers/updateUserController.js');

const getAUser = async (req,res) => {
    try {
        const {name} = req.params;

        //! GET user from database
        const user = await getAUserController(name);

        //* Response with find user
        res.status(200).json(user);
    } catch ({message}) {
        res.status(400).json({error:message});
    };
};

const getAllUsers = async (req,res) => {
    try {
        const users = await getAllUsersController();
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
        const user = await createUserController({name});

        //* Response with user created
        res.status(200).json({...user});
    } catch ({message}) {
        res.status(400).json({error: message});
    };
};
const deleteUser = async (req,res) => {
    try {
        const {name} = req.params;
        
        //! Delete user - Not returns something
        await deleteUserController({name});

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
        const {name:idName} = req.params;
        const {name} = req.body;
        
        //* Validate data of name
        if(!validateName(name)) throw new Error(`El atributo name no cuenta con los parámetros válidos`);
        
        //? Update user in database
        const user = await updateUserController({idName, name});

        res.status(200).json({
            request:`El elemento ${idName} se ha actualizado a ${name}`,
            user: {
                previous: idName,
                current: name
            }
        });
    } catch ({message}) {
        res.status(400).json({error: message});
    };
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