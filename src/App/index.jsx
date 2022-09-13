import React from 'react';
import { MyComponent } from '../Components/MyComponent';
import { MyContext } from './MyContext';
import { AllContext } from './MyContext';

import { Route, Routes, Navigate } from 'react-router-dom';

function AppUI() {
    const { s, ls, f, lf } = React.useContext(AllContext);
    return (
        <div id="main-general-div" className={`${s.classNames.generalStyles}`}>
            <Routes>
                {/* -----------   Home   ----------- */}
                <Route
                    path="/"
                    element={
                        <MyComponent />
                    }
                />
                {/* -----------   Default   ----------- */}

                {/* -----------   404   ----------- */}
                <Route path="not-found/" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
                {/* -----------   /404   ----------- */}

                {/* -----------   Redirect   ----------- */}
                <Route path="*" element={<Navigate to="/not-found/" />} />
                {/* -----------   /Redirect   ----------- */}

            </Routes>
        </div>
    );
}

function App(props) {
    return (
        <MyContext>
            <AppUI />
        </MyContext>
    );
}

export default App;
