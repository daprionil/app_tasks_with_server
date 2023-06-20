import { BsPersonSquare } from 'react-icons/bs';
import { RiAddLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

function UserCardHome({name, id, Tasks, setUserAssignTask}) {
    return (
        <div className='p-2 my-2'>
            <div className='grid grid-cols-6 items-center'>
                <div className='flex col-span-4 items-center gap-2'>
                    <BsPersonSquare className='text-xl drop-shadow-lg'/>
                    <NavLink to={`/users/${name}`}>
                        <p className='font-semibold hover:underline drop-shadow-lg capitalize font-poppins'>{name}</p>
                    </NavLink>
                </div>
                <div className='col-span-2'>
                    <p className='font-poppins drop-shadow-xl font-semibold'>T{Tasks.length} - #{id}</p>
                </div>
            </div>
            <button
                className='btn mt-2 bg-blue-400 font-medium font-poppins gap-3 w-full transition-all duration-200 group hover:shadow-lg'
                onClick={() => setUserAssignTask({id,name})}
            >
                <RiAddLine className='justify-self-end mr-2 inline-block bg-gray-400 shadow-all bg-opacity-70 text-gray-500 rounded-md text-lg transform transition-all duration-300 group-hover:scale-110'/>
                <span className='drop-shadow-2xl inline-block text-sm md:text-base justify-self-start'>Asignar tarea</span>
            </button>
        </div>
    );
}

export default UserCardHome;