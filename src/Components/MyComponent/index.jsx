import React from 'react';
import { AllContext } from '../../App/MyContext';

function MyComponent() {
    const { ls, lf, s, f } = React.useContext(AllContext);
    return (
        <React.Fragment>
            <p>
                Actual theme: {ls.theme}

            </p>
            <button
                onClick={lf.toggleTheme}
                >
                changeTheme
            </button>
        </React.Fragment>
    )
}

export { MyComponent };