import React from 'react'

const Context = React.createContext()

function Provider(props) {
    return (
        <Context.Provider value={{
            
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, Provider };