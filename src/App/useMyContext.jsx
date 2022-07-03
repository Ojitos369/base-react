// import React from 'react';
// import axios from 'axios';
// import { useLocalStorage } from './useLocalStorage';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';

function useMyContext(){

    const initialState = {
        input: '',
    }

    const [state, dispatch] = useReducer({ reducer, initialState });

    const f = new functions(dispatch);

    return {
        state, f
    };
}


export { useMyContext };
