import { Outlet } from 'react-router-dom';
import { useStates } from '../../Hooks/useStates';
import { Header } from '../../Components/Header';
import styles from './styles/index.module.scss';

const Main = props => {
    const { s, f, ls, lf } = useStates();
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export { Main };
