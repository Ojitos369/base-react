import { useStates } from '../../Hooks/useStates';

function Test() {
    const { s, f, ls, lf } = useStates();
    return (
        <>
            Component to make tests
        </>
    )
}

export { Test };
