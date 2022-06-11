import React from 'react';

function MyComponent({
    myState, setMyState
}) {
    return (
        <React.Fragment>
            <p>Base: {myState}</p>
            <input type="text" value={myState} onChange={(e) => setMyState(e.target.value)} />
        </React.Fragment>
    )
}

export { MyComponent };