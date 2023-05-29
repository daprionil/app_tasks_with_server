const getAUserController = async (name) => {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/users/${name}`);
    const data = response.json();
    return data;
};

export default getAUserController;