const getTasksController = async () => {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/tasks`);
    const data = await response.json();
    return data;
};

export default getTasksController;