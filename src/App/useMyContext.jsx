import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useMyContext() {
    const [myState, setMyState] = React.useState();
    const [myItems, setMyItems] = useLocalStorage('myItems', []);
    return {
        myState, setMyState,
        myItems, setMyItems
    };
}

export { useMyContext };