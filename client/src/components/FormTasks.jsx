import { RiBookletLine } from 'react-icons/ri';

import ToggleSwitch from './ToggleSwitch';
import { useContext } from 'react';
import { formContext, updateContext, clearContext } from '../context/HomeProviderContext';

function FormTasks() {
    //* From context form
    const [valuesForm, dispatch] = useContext(formContext);
    
    //? Change values of context form
    const handleChange = ({target:{name, checked, value, type}}) => {
        let data = {};

        //! If the input a checkbox
        if(type === 'checkbox'){
            data[name] = checked;
        }else{
            data[name] = value;
        }
        dispatch(updateContext(data));
    };

    //? Validate Form
    const handleSubmit = e => {
        e.preventDefault();

        //!Validate Form with errors
        dispatch(clearContext());
    };

    return (
        <form action="" onSubmit={handleSubmit} className="bg-main rounded-3xl flex flex-col gap-3 w-full md:col-span-6 p-4 pb-16 shadow-all">
            <h1 className='text-3xl p-2 mb-2 font-raleway font-bold drop-shadow'>Administrador de Tareas</h1>
            <InputLabelContainer Icon={RiBookletLine}>
                <input
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    value={valuesForm.asunto}
                    onChange={handleChange}
                />
            </InputLabelContainer>
            <InputLabelContainer>
                <textarea
                    className=''
                    cols='30'
                    rows="7"
                    name="description"
                    placeholder='Descripción de la Tarea'
                    value={valuesForm.description}
                    onChange={handleChange}
                >
                </textarea>
            </InputLabelContainer>
            <div className='flex gap-3 items-center justify-center max-w-lg w-full'>
                <span className='border-b-4 font-poppins border-stone-300 font-semibold'>Suspendida</span>
                <ToggleSwitch
                    name='status'
                    checked={valuesForm.status}
                    functionChange={handleChange}
                />
                <span className='border-b-4 font-poppins border-amber-400 font-semibold'>Pendiente</span>
            </div>
            <div className={`max-w-lg w-full flex items-center ${valuesForm.User.name ? 'justify-between md:justify-around': 'justify-start'}`}>
                <input
                    type="submit"
                    value="Agregar"
                    className='btn bg-red-500 text-xl w-fit text-white font-bold'
                />
                {/* //! Validar existencia de la prop */}
                {
                    valuesForm.User.name &&
                    <p
                        className='font-quicksand text-center font-thin text-xl'>
                            Tarea asignada a: <span
                                className='font-poppins text-stone-400 underline'>
                                {valuesForm.User.name}
                            </span>
                    </p>
                }
            </div>
        </form>
    );
}

function InputLabelContainer({children, Icon}) {    
    return (
        <div className='shadow-all flex items-center bg-stone-100 p-2 px-4 rounded-2xl w-full max-w-lg border-4 border-stone-300'>
            <label> {Icon && <Icon className='text-2xl'/>}</label>
            {children}
        </div>
    );
}

export default FormTasks;