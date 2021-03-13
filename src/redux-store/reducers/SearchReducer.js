const AuthReducer = (state = {}, actions) => {
    switch (actions.type) {
    case "SET_PENDING":
        return { ...state, pending:true };
    case "SET_TITLE":
        return { ...state, title:actions.payload };
    case "SET_DATA":
        return { ...state, data:actions.payload };
    case "SET_SUCCESS":
        return { ...state, pending:false };
    default:
        return state;
    }
};

export default AuthReducer;
