import { useSelector } from "react-redux";
import { useStates } from '../../App/useStates';

function Test() {
    const { s, f, ls, lf } = useStates();
    return (
        <>
            Component to make tests
        </>
    )
}

export { Test };
