const symbolNameReducer = (state = '', action) => {
    switch(action.type) {
        case "SYMBOL_NAME":
            return action.payload;
        default:
            return state;
    }
}

export default symbolNameReducer;
