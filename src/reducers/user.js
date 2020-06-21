const { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_FAIL, SIGNUP_SUCCESS, REMEMBER_ME, LOG_OUT } = require("../constants")

const initState = {
    name: '',
    password: '',
    email: '',
    isAuthenticated: false,
    message: '',
    loggedIn: localStorage.getItem('loggedIn') === 'on'
}

const user = (state = initState, action) => {
    const { type, data } = action;
    switch (type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, name: data.name, isAuthenticated: data.isAuthenticated }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
            return { ...state, isAuthenticated: data.isAuthenticated, message: data.message }
        case REMEMBER_ME:
            return { ...state, loggedIn: data.loggedIn }
        case LOG_OUT:
            return { ...state, loggedIn: false, isAuthenticated: false }
        default:
            return state;
    }
}

export default user;
