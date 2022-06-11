import React from 'react';

function useMyContext() {
    const [myState, setMyState] = React.useState();
    return {
        myState, setMyState
    };
}

export { useMyContext };