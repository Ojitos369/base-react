import React from "react";

const updateInitialState = (f, ls) => {
    let classNames = {}
    if (ls.theme === 'dark') {
        classNames = {
            generalStyles: 'bg-dark text-light',
        }
    } else if (ls.theme === 'light') {
        classNames = {
            generalStyles: 'bg-light text-dark',
        }
    }
    f.updateClassNames(classNames);
}

function useLocalStorage(itemName, initialValue, f) {
    const [state, dispatch] = React.useReducer(reducer, initialValue);

    const {} = state;

    // Action creators
    const onSave = (newItem)=>dispatch({ type: actionTypes.save, payload: newItem});

    React.useEffect(()=>{
        setTimeout( ()=>{
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem) {
                localStorage.setItem(itemName,JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            onSave(parsedItem);
            updateInitialState(f, parsedItem);
        } catch (error) {
            console.log(error);
        }
        },1000);
    },[]);

    const saveItem = (newItem) =>{
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName,stringifiedItem);
            onSave(newItem);
        } catch (error) {
            console.log(error);
        }
    }

    return [state, saveItem];
}

const actionTypes = {
    save: 'SAVE',
}

const reducerObject = (state, payload) =>({
    [actionTypes.save]:{
        ...payload
    },
});

const reducer = (state, action) =>{
    return reducerObject(state, action.payload)[action.type] || state;
}

class localFunctions {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    changeTheme = (ls, f) => {
        let clone_state = {
            ...ls,
            theme: (ls.theme === 'dark') ? 'light' : 'dark',
        };
        this.dispatch(clone_state);
        updateInitialState(f, clone_state);
    }
}

export { useLocalStorage, localFunctions }