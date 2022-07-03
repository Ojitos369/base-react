import React from 'react';

function useReducer({ initialState, reducer }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return [state, dispatch];
}


export { useReducer };