import FormTasks from '../components/FormTasks';
import FormProviderContext from '../context/FormProviderContext';
function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-9">
            <FormProviderContext>
                <FormTasks />
            </FormProviderContext>
        </div>
    );
}

export default Home;