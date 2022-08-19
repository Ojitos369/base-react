import React from 'react';
import { MyComponent } from '../Components/MyComponent';
import { useMyContext } from './useMyContext';

import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';

function App() {
    const { 
        state, f,
        localState, lf,
    } = useMyContext();
    return (
        <React.Fragment>
            <Routes>
                {/* -----------   Home   ----------- */}
                <Route
                    path="/"
                    element={
                        <MyComponent 
                            state={state} 
                            updateInput={f.updateInput}
                            lstate={localState}
                            lupdateInput={lf.updateInput}
                            />
                    }
                />
                {/* -----------   Default   ----------- */}
                <Route path="*" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
