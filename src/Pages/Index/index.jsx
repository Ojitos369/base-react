import { useMemo, useEffect } from 'react';
import { useStates } from '../../Hooks/useStates';
import styles from './styles/index.module.scss';

const Index = props => {
    const { ls, s, f } = useStates();
    const theme = useMemo(() => ls.theme, [ls.theme]);
    const modalMode = useMemo(() => s.changeTheme?.modalMode, [s.changeTheme?.modalMode]);
    const showModal = useMemo(() => s.changeTheme?.showModal, [s.changeTheme?.showModal]);

    const toggleModalMode = () => {
        f.u1('changeTheme', 'modalMode', modalMode === "M" ? "N" : "M");
    }

    const toggleShowModal = () => {
        f.u1('changeTheme', 'showModal', !showModal);
    }

    useEffect(() => {
        f.app.helloWorld();
    }, []);

    useEffect(() => {
        if (!showModal) return;
        f.general.notificacion({
            mode: 'info',
            title: 'Cambio Thema',
            message: `Thema Cambiado a: ${theme}`
        });
    }, [theme, showModal]);

    return (
        <div className={`${styles.indexPage} flex w-full flex-wrap justify-center`}>
            <h2 className={`text-center w-1/3 mt-3 font-bold text-3xl ${theme === 'black' ? 'text-white' : 'text-black'} reflejo`}
            >
                Actual theme: {theme}
            </h2>
            <div className='flex w-full flex-wrap justify-center mt-4'>
                <h3 className='w-full text-center'>
                    Options
                </h3>
                <div className='w-1/5 m-3'>
                    <button
                        className={`w-full rounded-lg px-4 py-2 ${showModal ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700' } text-white`}
                        onClick={toggleShowModal}
                    >
                        Show Modal
                    </button>
                </div>
                {showModal && 
                <div className='w-1/5 m-3'>
                    <button
                        className='w-full rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white'
                        onClick={toggleModalMode}
                    >
                        Modal Mode: {modalMode === "M" ? "Move" : "Normal"}
                    </button>
                </div>}
            </div>
        </div>
    )
}

export { Index };
