import { createContext, useEffect, useReducer } from "react";

const NAME_STORAGE_VALUES = 'form_values';

//====================================================
//* Create actionTypes from reducer FormContext and Create Actions
const UPDATE_VALUES = "UPDATE_VALUES";
const CLEAR_VALUES = "CLEAR_VALUES";

const updateContext = (payload) => ({
    type: UPDATE_VALUES,
    payload
});

const clearContext = () => ({
    type: CLEAR_VALUES
});

export {
    updateContext,
    clearContext
};

//====================================================

//* Create context for form
const formContext = createContext();

//* Generate useContext to share with components

//* DATA FOR REDUCER CONTEXT FORM
const reducerContext = (state, {type, payload})=>{
    const typeSelect = ({
        UPDATE_VALUES: () => ({
            ...state,
            ...payload
        }),
        CLEAR_VALUES: () => ({
            asunto:'',
            description:'',
            status: false,
            User: {}
        }),
    })[type];

    return typeSelect ? typeSelect() : state;
};
const initialState = {
    asunto:'',
    description:'',
    status: false,
    User: {}
};

//* Generate provider context !COMPONENT
function HomeProviderContext({children}) {
    const formStorageValues = JSON.parse(localStorage.getItem(NAME_STORAGE_VALUES));
    const [valuesForm, reducer] = useReducer(reducerContext, formStorageValues ?? initialState);

    //! Each rendering, set form values in the local storage
    useEffect(() => {
        localStorage.setItem(NAME_STORAGE_VALUES, JSON.stringify(valuesForm));
    },[valuesForm]);

    return (
        <formContext.Provider value={[valuesForm,reducer]}>
            {children}
        </formContext.Provider>
    );
}

//? Export data from formContext
export {
    formContext,
}
export default HomeProviderContext;