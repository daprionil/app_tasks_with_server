import { RiBookletLine } from 'react-icons/ri';

import ToggleSwitch from './ToggleSwitch';
import { useContext, useState } from 'react';
import { formContext, updateContext, clearContext } from '../context/HomeProviderContext';
import { useDispatch } from 'react-redux';
import { createTasks } from '../redux/createActions';

function FormTasks() {
    const dispatchRedux = useDispatch();
    //* From context form
    const [valuesForm, dispatch] = useContext(formContext);
    const [inputErrors, setInputErrors] = useState([]);
    
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

        //Select elements to apply validation
        const elementsToValidate = new Map([
            ['title',(val) => val && val.length >= 5 && val.length <= 100],
            ['description',(val) => val && val.length >= 10 && val.length <= 1000],
            ['User',(val) => Boolean(val.name)]
        ]);

        //Generate validation
        const validate = Object.entries(valuesForm).filter(([key,value]) => {
            const validation = elementsToValidate.get(key);
            if(validation){
                const finalValue = typeof value === 'string' ? value.trim() : value;
                return !validation(finalValue);
            };
        });

        //! Set errors from Inputs
        const errors = getErrors(validate);
        setInputErrors(errors);

        //!Validate Form with errors
        if(!errors.length){

            //* Parse Object to create Tasks
            const UserId = valuesForm.User.id
            const parseData = {...valuesForm};
            delete parseData.User;
            
            //! Send create task in form
            dispatchRedux(createTasks({
                ...parseData,
                status: parseData.status ? 'suspended' : 'pending',
                UserId
            }));

            //* Clear form values in context
            dispatch(clearContext());
        }
        
    };

    //* Parse errors
    const getErrors = (errors) => errors.map(([key]) => {
        const parseError = ({
            User: `No hay un usuario para Asignar la Tarea`,
            title: `El asunto debe tener entre 5 y 100 caracteres`,
            description: `La descripción debe tener entre 10 y 1000 caracteres`
        })[key];
        return  parseError ?? `El campo ${key} no es válido`;
    });

    return (
        <form action="" onSubmit={handleSubmit} className="bg-main rounded-3xl flex flex-col gap-3 w-full md:col-span-6 p-4 pb-16 shadow-all">
            <h1 className='text-3xl p-2 mb-2 font-raleway font-bold drop-shadow'>Administrador de Tareas</h1>
            <InputLabelContainer Icon={RiBookletLine}>
                <input
                    type="text"
                    name="title"
                    placeholder="Asunto"
                    value={valuesForm.title}
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
                <span className='border-b-4 font-poppins border-amber-400 font-semibold'>Pendiente</span>
                <ToggleSwitch
                    name='status'
                    checked={valuesForm.status}
                    functionChange={handleChange}
                />
                <span className='border-b-4 font-poppins border-stone-300 font-semibold'>Suspendida</span>
            </div>
            {/* //! Errors */}
            <div>
                {
                    Boolean(inputErrors.length) && inputErrors.map( (err, i)=> (
                        <ErrorMessage message={err} key={i}/>
                    ))
                }
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


const ErrorMessage = ({message}) => {
    return (
        <p className='p-1 text-red-600 font-raleway font-bold text-sm drop-shadow-md'>
            {message}
        </p>
    );
}

export default FormTasks;