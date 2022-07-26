import React from 'react';
import { MyComponent } from '../Components/MyComponent';
import { useMyContext } from './useMyContext';

function App() {
    const { 
        state, f,
        localState, lf,
    } = useMyContext();
    return (
        <React.Fragment>
            <MyComponent 
                state={state} 
                updateInput={f.updateInput}
                lstate={localState}
                lupdateInput={lf.updateInput}
                />
        </React.Fragment>
    );
}

export default App;
