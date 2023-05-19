import React, { Fragment, useEffect } from 'react';
import { MyComponent } from '../Components/MyComponent';
import { MyContext } from './MyContext';
import { AllContext } from './MyContext';
import { Theme } from '../Components/Theme';
import { Test } from '../Components/Test';

import { Route, Routes, Navigate } from 'react-router-dom';


const BgTheme = () => {
    const { ls } = React.useContext(AllContext);
    return (
        <Fragment>
            <div className={`wipeInDown full-page-container bg-my-${ls.theme}`}></div>
            <Theme />
        </Fragment>
    )
}

function AppUI() {
    const { s, ls, hp } = React.useContext(AllContext);

    useEffect(() => {
        hp.cambiarThema(ls?.theme)
    }, [ls?.theme]);

    return (
        <div className={`text-${s.classNames.less}`}>
            <BgTheme />
            <Routes>
                {/* -----------   Home   ----------- */}
                <Route
                    path="/"
                    element={
                        <MyComponent />
                    }
                />
                {/* -----------   /Home   ----------- */}


                {/* -----------   Test   ----------- */}
                <Route
                    path="test"
                    element={
                        <Test />
                    }
                />
                {/* -----------   /Test   ----------- */}

                {/* -----------   404   ----------- */}
                <Route path="*/" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
                {/* -----------   /404   ----------- */}

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
