import { useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
import { Link } from 'react-router-dom';

import styles from './styles/index.module.scss';

import { Menu } from './Menu';

const Header = props => {
    const { s, f } = useStates();

    const actualLink = useMemo(() => s.page?.title,[s.page?.title]);

    return (
        <header className={`${styles.header}`}>
            <Link to='/'>
                <h1 className=''>
                    Main
                </h1>
            </Link >
            <Menu styles={styles} />
        </header>
    )
}

export { Header }

