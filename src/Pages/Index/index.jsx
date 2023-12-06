import { useContext, useMemo } from 'react';
import { AllContext } from '../../App/MyContext';
import { ModalThemeChanged } from '../../Components/Modals/ModalThemeChanged';

import './styles/index.module.css';

const Index = props => {
    const { ls, lf, s, f } = useContext(AllContext);
    const theme = useMemo(() => ls.theme, [ls.theme]);
    const modalChangeTheme = useMemo(() => !!s.modals?.themes?.changed, [s.modals?.themes?.changed]);
    return (
        <>
            <div className='flex flex-wrap justify-center'>
                <h2 className={`text-center w-1/3 mt-3 font-bold text-3xl ${theme === 'black' ? 'text-white' : 'text-black'} reflejo`}
                >
                    Actual theme: {theme}
                </h2>
            </div>
            {modalChangeTheme && <ModalThemeChanged />}
        </>
    )
}

export { Index };
