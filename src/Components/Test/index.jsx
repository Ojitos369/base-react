import React, { Fragment } from 'react';
import { AllContext } from '../../App/MyContext';

function Test() {
    const { ls, lf, s, f } = React.useContext(AllContext);
    return (
        <React.Fragment>
            Component to make tests
        </React.Fragment>
    )
}

export { Test };
