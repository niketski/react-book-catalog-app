import { useReducer } from "react";

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

const useInput = function(validate) {
    const [inputState, dispatch] = useReducer(reducer, initialState);
    const isValid                = validate(inputState.value);
    const hasError               = !isValid && inputState.isTouched;

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
        inputResetHandler
    };

};

export default useInput;