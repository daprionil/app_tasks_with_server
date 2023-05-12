import BarUsersHome from '../components/BarUsersHome';
import FormTasks from '../components/FormTasks';
import HomeProviderContext from '../context/HomeProviderContext';
function Home() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-9 items-start">
            <HomeProviderContext>
                <FormTasks />
                <BarUsersHome />
            </HomeProviderContext>
        </div>
    );
}

export default Home;