const createUserController = async (user) => {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/tasks`, {
        method: 'POST',
        body:JSON.stringify(user),
        headers:{
            "Content-Type":'application/json'
        },
        mode:"cors"
    });
    console.log(response);
    return response
}
export default createUserController;