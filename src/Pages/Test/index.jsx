import { useContext } from 'react';
import { AllContext } from '../../App/MyContext';

function Test() {
    const { ls, lf, s, f } = useContext(AllContext);
    return (
        <>
            Component to make tests
        </>
    )
}

export { Test };
