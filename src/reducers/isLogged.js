//REDUCER
const loggedReducer = (state = false, action) => {
    switch(action.type){
        case "SIGN_IN":
            return state = true;
        case "SIGN_OFF":
            return state = false;
        default:
            return state;
    }
}

export default loggedReducer;
