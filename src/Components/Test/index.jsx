import React, { Fragment } from 'react';
import { AllContext } from '../../App/MyContext';

function Test() {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    return (
        <React.Fragment>
            Component to make tests
        </React.Fragment>
    )
}

export { Test };
