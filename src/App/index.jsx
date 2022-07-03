import React from 'react';
import { MyComponent } from '../Components/MyComponent';
import { useMyContext } from './useMyContext';

function App() {
    const { 
        state, f
    } = useMyContext();
    return (
        <React.Fragment>
            <MyComponent 
                state={state} 
                updateInput={f.updateInput} />
        </React.Fragment>
    );
}

export default App;
