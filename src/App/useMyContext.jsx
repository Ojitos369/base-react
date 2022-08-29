// import React from 'react';
// import axios from 'axios';
import { useLocalStorage, localFunctions } from './useLocalStorage';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';

function useMyContext(){

    const initialState = {
        classNames: {
            generalStyles: 'bg-light text-dark',
        }
    }

    const [state, dispatch] = useReducer({ reducer, initialState });
    const f = new functions(dispatch);

    const localInitialState = {
        theme: 'dark',
    }
    // localStorage.removeItem('localStatev2');
    const [localState, localDispatch] = useLocalStorage('localState', localInitialState, f);
    const lf = new localFunctions(localDispatch);


    return {
        state, f,
        localState, lf,
    };
}


export { useMyContext };
