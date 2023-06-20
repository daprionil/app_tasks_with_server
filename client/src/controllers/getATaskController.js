const getATaskController = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/tasks/${id}`);
    const data = await response.json();
    return data;
};
 
export default getATaskController;