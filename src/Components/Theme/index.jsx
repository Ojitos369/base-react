import React, { Fragment, useEffect } from 'react';
import { AllContext } from '../../App/MyContext';

function Theme() {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    return (
        <button
            className='toggle-theme-button'
            id='toggle-theme-container'
            onClick={lf.toggleTheme}
            >
            <span>
                {ls.theme === 'white' ? icons.sun() : icons.moon()}
            </span>
        </button>
    )
}

export { Theme };
