import { useRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/createActions";

function FormCardTask({title,description, handleEdit, idTask}) {
    const dispatchRedux = useDispatch();

    const edit = useRef(false);
    const [errors, setErrors] = useState([]);
    const [valuesUpdateForm, changeUpdateForm] = useState({title,description});

    const handleChange = ({target:{name,value}}) => {
        changeUpdateForm(state => ({...state, [name]:value}));
        edit.current = true;
    };
    const handleSubmit = evt => {
        evt.preventDefault();

        const validate = Object.entries(valuesUpdateForm).filter(([key,value]) => {
            const validation = elementsToValidate[key];
            if(validation){
                const finalValue = typeof value === 'string' ? value.trim() : value;
                return !validation(finalValue);
            };
        });

        const errs = getErrors(validate);
        setErrors(errs);

        //! Set errores
        if(!validate.length){
            if(edit.current){
                dispatchRedux(updateTask({data:valuesUpdateForm,idTask}));
            };

            //! Close Edit Form and Set Form
            handleEdit();
            edit.current = false;
        };
    };

    return (
        <form action="" className="col-span-auto xs:col-span-4 bg-opacity-40 p-4 font-poppins" onSubmit={handleSubmit}>
            <h2 className="p-1 font-bold text-slate-700 drop-shadow-all">Editar Tarea</h2>
            <div className=" flex flex-col gap-2">
                <input
                    type="text"
                    name="title"
                    value={valuesUpdateForm.title}
                    onChange={handleChange}
                    placeholder="Asunto"
                    className=" bg-stone-100 border-stone-200 rounded-lg border-2"
                />
                <textarea
                    name="description"
                    placeholder=""
                    value={valuesUpdateForm.description}
                    className="bg-stone-100 border-2 border-stone-200 rounded-lg"
                    onChange={handleChange}>
                </textarea>
                {
                    errors.map( (err,i) => (
                        <ErrorMessage key={i} message={err} />
                    ))
                }
                <button type="submit" className="btn bg-blue-600 w-fit transform hover:scale-95 text-white font-bold hover:shadow-all transition-all duration-500">Actualizar</button>
            </div>
        </form>
    );
}


const elementsToValidate = {
    title: (val) => val && val.length >= 5 && val.length <= 100,
    description: (val) => val && val.length >= 10 && val.length <= 1000,
};

//* Parse errors
const getErrors = (errors) => {
    const parseError = {
        User: `No hay un usuario para Asignar la Tarea`,
        title: `El asunto debe tener entre 5 y 100 caracteres`,
        description: `La descripción debe tener entre 10 y 1000 caracteres`
    };
    return errors.map(([key]) => {
        return  parseError[key] ?? `El campo ${key} no es válido`;
    });
};

export default FormCardTask;