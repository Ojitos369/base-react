import React from 'react';
import { AllContext } from '../../App/MyContext';
import { ThemeChanged } from '../Modals/ThemeChanged';

function MyComponent() {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    return (
        <React.Fragment>
            <div className='row justify-content-center pt-5 h2 fw-bold'>
                <p className='col-12 text-center'>
                    Actual theme: {ls.theme}
                </p>
                <button
                    className="btn btn-primary col-5"
                    onClick={lf.toggleTheme}
                    >
                    Change Theme <span className='text-icon'>{icons.brush()}</span>
                </button>
            </div>
            {s.modals?.themes?.changed && <ThemeChanged />}
        </React.Fragment>
    )
}

export { MyComponent };