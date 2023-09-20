import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { ModalThemeChanged } from '../Modals/ModalThemeChanged';


import './styles/index.module.css';

const MyComponent = props => {
    const { ls, lf, s, f } = useContext(AllContext);
    return (
        <Fragment>
            <div className='flex flex-wrap justify-center'>
                <h2 className={`text-center w-1/3 mt-3 font-bold text-3xl ${ls?.theme === 'black' ? 'text-white' : 'text-black'} reflejo`}
                >
                    Actual theme: {ls.theme}
                </h2>
            </div>
            {/* {s.modals?.themes?.changed && <ModalThemeChanged zindex={-1} />} */}
            {s.modals?.themes?.changed && <ModalThemeChanged />}
        </Fragment>
    )
}

export { MyComponent };
