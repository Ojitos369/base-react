import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useStates } from '../../../Hooks/useStates';

const MenuModal = props => {
    const { s, f, lf } = useStates();
    const { styles } = props;

    const userLogged = s.login?.data?.user || {};

    const login = () => {
        f.u2('menu', 'modal', 'mode', 'login');
    }
    const filtros = () => {
        f.u2('menu', 'modal', 'mode', 'filtros');
    }
    
    return (
        <div className={`${styles.menuModal} w-full flex flex-wrap justify-center`}>
            <div className="w-10/12 md:w-5/12 px-4 py-3">
                <button
                    className='w-full flex items-center justify-center py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 text-black'
                    onClick={lf.toggleTheme}
                    >
                    <p className="">Toggle Theme</p>
                </button>
            </div>
        </div>
    )
}

export { MenuModal }
