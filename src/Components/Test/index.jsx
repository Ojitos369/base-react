import { useStates } from '../../Hooks/useStates';
import styles from './styles/index.module.scss';

const Test = props => {
    const { s, f, ls, lf } = useStates();
    return (
        <>
            Component to make tests
        </>
    )
}

export { Test };
