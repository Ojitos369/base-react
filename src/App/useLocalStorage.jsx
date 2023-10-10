import React from "react";


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
            f.upgradeLvl0('loading', false);
            // updateInitialState(f, parsedItem);
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
    constructor(ld, ls, s, f, d) {
        this.ld = ld;
        this.ls = ls;
        this.s = s;
        this.f = f;
    }

    toggleTheme = () => {
        let clone_state = {
            ...this.ls,
            theme: (this.ls.theme === 'black') ? 'white' : 'black',
        };
        this.ld(clone_state);
        // updateInitialState(this.f, clone_state);
        this.f.upgradeLvl0('loading', false);
        this.f.upgradeLvl2('modals', 'themes', 'changed', true);
    }
}

export { useLocalStorage, localFunctions }