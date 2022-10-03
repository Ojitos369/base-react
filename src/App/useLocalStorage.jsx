import React from "react";

const updateInitialState = (f, ls) => {
    let classNames = {}
    let styles = {}
    if (ls.theme === 'light') {
        classNames = {
            generalStyles: 'bg-light text-dark',
            more: 'light',
            less: 'dark',
            generalStylesReversed: 'bg-dark text-light',
        }
        styles = {
            border: {
                border: '1px solid #212529',
            },
            borderReversed: {
                border: '1px solid #f8f9fa',
            },
            basicStyle: {
                backgroundColor: '#f8f9fa',
                color: '#212529',
            },
            basicStyleReversed: {
                backgroundColor: '#212529',
                color: '#f8f9fa',
            },
            borderBottom: {
                borderBottom: '1px solid #212529',
            },
            borderBottomReversed: {
                borderBottom: '1px solid #f8f9fa',
            },
            borderTop: {
                borderTop: '1px solid #212529',
            },
            borderTopReversed: {
                borderTop: '1px solid #f8f9fa',
            }
        }
    } else if (ls.theme === 'dark') {
        classNames = {
            generalStyles: 'bg-dark text-light',
            more: 'dark',
            less: 'light',
            generalStylesReversed: 'bg-light text-dark',
        }
        styles = {
            border: {
                border: '1px solid #f8f9fa',
            },
            borderReversed: {
                border: '1px solid #212529',
            },
            basicStyle: {
                backgroundColor: '#212529',
                color: '#f8f9fa',
            },
            basicStyleReversed: {
                backgroundColor: '#f8f9fa',
                color: '#212529',
            },
            borderBottom: {
                borderBottom: '1px solid #f8f9fa',
            },
            borderBottomReversed: {
                borderBottom: '1px solid #212529',
            },
            borderTop: {
                borderTop: '1px solid #f8f9fa',
            },
            borderTopReversed: {
                borderTop: '1px solid #212529',
            }
        }
        
    }
    // f.updateClassNames(classNames);
    f.upgradeLvl0('classNames', classNames);
    // f.updateStyles(styles);
    f.upgradeLvl0('styles', styles);
    // f.changeLoading(false);
    f.upgradeLvl0('loading', false);
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
    constructor(ld, ls, s, f, d) {
        this.ld = ld;
        this.ls = ls;
        this.s = s;
        this.f = f;
    }

    toggleTheme = () => {
        let clone_state = {
            ...this.ls,
            theme: (this.ls.theme === 'dark') ? 'light' : 'dark',
        };
        this.ld(clone_state);
        updateInitialState(this.f, clone_state);
        this.f.upgradeLvl2('modals', 'themes', 'changed', true);
    }
}

export { useLocalStorage, localFunctions }