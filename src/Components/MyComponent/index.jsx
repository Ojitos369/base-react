import React from 'react';

function MyComponent({
    state, updateInput,
    lstate, lupdateInput
}) {
    // console.log('%c state', 'color: #f0a; font-size: 1.5em;', state);
    return (
        <React.Fragment>
            <div className='row justify-content-center'>
                <p className='h2 col-12 text-center text-dark'>Base: {state.input}</p>
                <input type="text" className='col-8 my-input text-light text-center' value={state.input || ''} onChange={updateInput} placeholder="Ingresa datos"/>
                <p className='h2 col-12 text-center text-dark'>Base: {lstate.input}</p>
                <input type="text" className='col-8 my-input text-light text-center' value={lstate.input || ''} onChange={(e) =>{lupdateInput(e,lstate)}} placeholder="Ingresa datos"/>
            </div>
        </React.Fragment>
    )
}

export { MyComponent };