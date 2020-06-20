import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../constants";

export const login = ({ inputEmail, inputPass }) => dispatch => {
    if (window.localStorage !== 'undefined') {
        const user = JSON.parse(localStorage.getItem('user') || '');
        const { name, email, password } = user;
        if (email === inputEmail && password === inputPass) {
            dispatch({ type: LOGIN_SUCCESS, data: { name, isAuthenticated: true } });
        } else {
            dispatch({ type: LOGIN_FAIL, data: { isAuthenticated: false, message: 'Credentials do not match' } });
        }
    } else {
        dispatch({ type: LOGIN_FAIL, data: { isAuthenticated: false, message: 'Storage not available' } });
    }
}

export const register = ({ name, email, password }) => dispatch => {
    if (window.localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        dispatch({ type: SIGNUP_SUCCESS, data: { name } });
    } else {
        dispatch({ type: SIGNUP_FAIL, data: { message: 'Storage not available' } });
    }
}