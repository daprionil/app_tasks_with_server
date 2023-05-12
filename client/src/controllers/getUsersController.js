const getUsersController =async function(){
    //! Get user from APIREST (server database postgres)
    const gistFetch = `${import.meta.env.VITE_URL_API}/users`;
    const response = await fetch(gistFetch);
    const data = await response.json();

    return data;
}
export default getUsersController;