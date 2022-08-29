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
        <div id="main-general-div" className={`${state.classNames.generalStyles}`}>
            <Routes>
                {/* -----------   Home   ----------- */}
                <Route
                    path="/"
                    element={
                        <MyComponent 
                            ls={localState}
                            lf={lf}
                            s={state}
                            f={f}
                        />
                    }
                />
                {/* -----------   Default   ----------- */}
                <Route path="*" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;
