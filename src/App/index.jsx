import React from 'react';
import { MyComponent } from '../Components/MyComponent';
import { useMyContext } from './useMyContext';

function App() {
    const { myState, setMyState } = useMyContext();
    return (
        <React.Fragment>
            <MyComponent 
                myState={myState} 
                setMyState={setMyState} />
        </React.Fragment>
    );
}

export default App;
