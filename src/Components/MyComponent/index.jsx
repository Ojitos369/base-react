import React from 'react';

function MyComponent({ ls, lf, s, f }) {
    // console.log('%c state', 'color: #f0a; font-size: 1.5em;', state);
    return (
        <React.Fragment>
            <p>Actual Theme {ls.theme}</p>
            <button onClick={() => lf.changeTheme(ls, f)}>
                Cambiar
            </button>
        </React.Fragment>
    )
}

export { MyComponent };