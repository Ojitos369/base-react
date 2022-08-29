const actionTypes = {
    update_class_names: 'UPDATE_CLASS_NAMES',
}

const reducerObject =  (state, actionTypes, payload = null) => ({
    [actionTypes.update_class_names]: {
        ...state,
        classNames: {
            ...state.classNames,
            ...payload,
        }
    }
})

const reducer = (state, action) => {
    const type = action.type;
    const payload = action.payload || null;

    if (reducerObject(state, actionTypes, payload)[type]) {
        return reducerObject(state, actionTypes, payload)[type];
    }
    return state;
}

class functions {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    
    updateClassNames = classNames => {
        this.dispatch({ type: actionTypes.update_class_names, payload: classNames });
    }
}

export { reducer, actionTypes, functions };