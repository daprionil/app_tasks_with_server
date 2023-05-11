import { createContext, useContext, useReducer } from "react";

//* Create actionTypes from reducer FormContext
const UPDATE_VALUES = "UPDATE_VALUES";

const updateContext = (payload) => ({
    type: UPDATE_VALUES,
    payload
});

//* Create context for form
const formContext = createContext();

//* Generate useContext to share with components

//! DATA FOR REDUCER CONTEXT FORM
const reducerContext = (state, {type, payload})=>{
    const typeSelect = ({
        UPDATE_VALUES: () => ({
            ...state,
            ...payload
        })
    })[type];
    return typeSelect ? typeSelect() : state;
};

const initialState = {
    asunto:'',
    description:'',
    status: false,
    UserId: null
}

//* Generate provider context
function FormProviderContext({children}) {
    const [state, reducer] = useReducer(reducerContext, initialState);
    return (
        <formContext.Provider value={[state,reducer]}>
            {children}
        </formContext.Provider>
    );
}

//? Export data from formContext
export {
    formContext,
    updateContext
}
export default FormProviderContext;