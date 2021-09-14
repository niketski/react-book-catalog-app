import { useReducer } from "react";
import inputValidate from "../utils/inputValidate";

const initialState = {
    value: '',
    isTouched: false,
};

function reducer(state, action) {

    switch(action.type) {
        case 'change':
            return { value: action.value, isTouched: true };
        break;

        case 'blur':
            return { value: state.value, isTouched: true }
        break;

        case 'reset':
            return { value: '',isTouched: false }
        break;

    }

}

const useInput = function(fieldName, type) {
    const [inputState, dispatch] = useReducer(reducer, initialState);
    const {isValid, errorMessage}     = inputValidate(inputState.value, fieldName, type);
    const hasError               = !isValid && inputState.isTouched;

    console.log(isValid, errorMessage);

    const inputChangehandler = function (event) {
        dispatch({type: 'change', value: event.target.value });
    };

    const inputBlurHandler = function() {
        dispatch({ type: 'blur' });
    };

    const inputResetHandler = function() {
        dispatch({ type: 'reset' });
    }


    return {
        value: inputState.value,
        isValid,
        hasError,
        inputChangehandler,
        inputBlurHandler,
        inputResetHandler,
        errorMessage
    };

};

export default useInput;