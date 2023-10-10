import React from 'react';
// import axios from 'axios';
import { useLocalStorage, localFunctions } from './useLocalStorage';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const AllContext = React.createContext();

function MyContext(props){

    const initialState = {
    }

    const [s, dispatch] = useReducer({ reducer, initialState });
    const f = new functions(dispatch, s);

    const localInitialState = {
        theme: 'black',
    }
    // localStorage.removeItem('react_base');
    const [ls, localDispatch] = useLocalStorage('react_base', localInitialState, f);
    const lf = new localFunctions(localDispatch, ls, s, f, dispatch);


    return (
        <AllContext.Provider
            value={{
                s, f,
                ls, lf,
                Link, useParams, useNavigate,
                MySwal,
            }}>
            {props.children}
        </AllContext.Provider>
    );
}


export { MyContext, AllContext };
