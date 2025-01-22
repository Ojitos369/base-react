import { useEffect } from 'react';
import { cambiarThema } from '../Core/helper';
import { Theme } from '../Components/Theme';

import { Main as MainPage } from '../Pages/Main';
import { Index as IndexPage } from '../Pages/Index';
import { Test as TestPage } from '../Pages/Test';
import { Route, Routes, Navigate } from 'react-router-dom';

import { store } from './store';
import { Provider } from "react-redux";
import { useStates } from '../Hooks/useStates';

import { GeneralNotification } from '../Components/Modals/general/GeneralNotification'; 

const BgTheme = () => {
    const { ls } = useStates();
    return (
        <>
            <div className={`wipeInDown full-page-container bg-my-${ls.theme}`}></div>
            <Theme />
        </>
    )
}

function AppUI() {
    const { ls, s } = useStates();

    useEffect(() => {
        cambiarThema(ls?.theme);
    }, [ls?.theme]);

    return (
        <div className={`text-[var(--my-minor)]`}>
            <BgTheme />
            <Routes>
                <Route path="" element={ <MainPage /> } >
                    {/* -----------   Index   ----------- */}
                    <Route path="" element={ <IndexPage /> } />
                    {/* -----------   /Index   ----------- */}
                    {/* -----------   Test   ----------- */}
                    <Route path="test" element={ <TestPage /> } />
                    {/* -----------   /Test   ----------- */}
                    {/* -----------   404   ----------- */}
                    <Route path="*" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
                    {/* -----------   /404   ----------- */}
                </Route>
            </Routes>

            {!!s.modals?.general?.notification &&
            <GeneralNotification />}
        </div>
    );
}

function App(props) {
    return (
        <Provider store={store}>
            <AppUI />
        </Provider>
    );
}

export default App;
