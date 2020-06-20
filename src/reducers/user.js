const { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_FAIL, SIGNUP_SUCCESS } = require("../constants")

const initState = {
    name: '',
    password: '',
    email: '',
    isAuthenticated: false,
    message: ''
}

const user = (state = initState, action) => {
    const { name, isAuthenticated, message } = action.data;
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, name, isAuthenticated }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
            return { ...state, isAuthenticated, message }
        default:
            return state;
    }
}

export default user;
