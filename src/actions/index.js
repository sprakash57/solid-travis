import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, REMEMBER_ME } from "../constants";

export const login = (email, password) => dispatch => {
    if (window.localStorage !== undefined) {
        let user = localStorage.getItem('user');
        if (user) user = JSON.parse(user);
        else user = '';
        const { name, mail, pass } = user;
        if (email === mail && password === pass) {
            dispatch({ type: LOGIN_SUCCESS, data: { name, isAuthenticated: true } });
        } else {
            dispatch({ type: LOGIN_FAIL, data: { isAuthenticated: false, message: 'Credentials do not match' } });
        }
    } else {
        dispatch({ type: LOGIN_FAIL, data: { isAuthenticated: false, message: 'Storage not available' } });
    }
}

export const register = (name, mail, pass) => dispatch => {
    if (window.localStorage !== undefined) {
        localStorage.setItem('user', JSON.stringify({ name, mail, pass }));
        dispatch({ type: SIGNUP_SUCCESS, data: { name, isAuthenticated: true } });
    } else {
        dispatch({ type: SIGNUP_FAIL, data: { isAuthenticated: false, message: 'Storage not available' } });
    }
}

export const rememberMe = loggedIn => dispatch => {
    if (window.localStorage !== undefined) {
        localStorage.setItem('loggedIn', loggedIn ? 'on' : 'off');
        dispatch({ type: REMEMBER_ME, data: { loggedIn } })
    } else {
        dispatch({ type: SIGNUP_FAIL, data: { isAuthenticated: false, message: 'Storage not available' } });
    }
}

export const logout = () => dispatch => {
    localStorage.setItem('loggedIn', 'off');
}