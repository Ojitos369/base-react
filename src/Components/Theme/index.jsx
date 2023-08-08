import React, { Fragment, useEffect } from 'react';
import { AllContext } from '../../App/MyContext';
import { Sun, Moon } from '../../App/Icons';
import styles from './styles/index.module.scss';
// console.log(styles);

function Theme() {
    const { ls, lf, s, f } = React.useContext(AllContext);
    return (
        <button
            className={`${styles.toggle_theme_button}`}
            id='toggle_theme_button'
            onClick={lf.toggleTheme}
            >
            <span>
                {ls.theme === 'white' ? <Sun /> : <Moon />}
            </span>
        </button>
    )
}

export { Theme };
