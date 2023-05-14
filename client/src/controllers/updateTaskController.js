const updateTaskController = async ({data,idTask}) => {
    //Options for fetch
    const optionsFetch = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'Application/json'
        }
    };
    //! Generate URL to put Task
    const url = `${import.meta.env.VITE_URL_API}/tasks/${idTask}`;
    
    //!Generate Request
    const response = await fetch(url, optionsFetch);
    const dataRes = await response.json();

    return dataRes;
};

export default updateTaskController;