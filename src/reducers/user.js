const { LOGIN_SUCCESS, LOGIN_FAIL } = require("../constants")

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
        case LOGIN_SUCCESS:
            return { ...state, name, isAuthenticated }
        case LOGIN_FAIL:
            return { ...state, isAuthenticated, message }
        default:
            return state;
    }
}

export default user;