import React from 'react';
// import axios from 'axios';
import { useLocalStorage, localFunctions } from './useLocalStorage';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';
import { Link, useParams, useNavigate } from 'react-router-dom';

const AllContext = React.createContext();

function MyContext(props){

    const initialState = {
        classNames: {
            generalStyles: 'bg-light text-dark',
        }
    }

    const [s, dispatch] = useReducer({ reducer, initialState });
    const f = new functions(dispatch);

    const localInitialState = {
        theme: 'dark',
    }
    // localStorage.removeItem('localStatev2');
    const [ls, localDispatch] = useLocalStorage('localState', localInitialState, f);
    const lf = new localFunctions(localDispatch, ls, s, f, dispatch);


    return (
        <AllContext.Provider
            value={{
                s, f,
                ls, lf,
                Link, useParams, useNavigate,
            }}>
            {props.children}
        </AllContext.Provider>
    );
}


export { MyContext, AllContext };
