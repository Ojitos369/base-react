const actionTypes = {
    update_input: 'UPDATE_INPUT',
}

const reducerObject =  (state, actionTypes, payload = null) => ({
    [actionTypes.update_input]: {
        ...state,
        input: payload,
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
    
    updateInput = (e) => {
        const payload = e.target.value;
        this.dispatch({ type: actionTypes.update_input, payload });
    }
}

export { reducer, actionTypes, functions };