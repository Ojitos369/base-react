// import React from 'react';
// import axios from 'axios';
import { useLocalStorage, localFunctions } from './useLocalStorage';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';

function useMyContext(){

    const initialState = {
        input: '',
    }

    const [state, dispatch] = useReducer({ reducer, initialState });
    const [localState, localDispatch] = useLocalStorage('localState', initialState);

    const f = new functions(dispatch);
    const lf = new localFunctions(localDispatch);

    return {
        state, f,
        localState, lf,
    };
}


export { useMyContext };
