import React, { useState } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { login, register, rememberMe } from '../../actions/user';
import { Redirect } from 'react-router-dom';
import Alert from '../common/Alert';

const Auth = ({ state, login, register, rememberMe }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [loginForm, setLoginForm] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleToggle = () => {
        setLoginForm(!loginForm);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (loginForm) login(e.target.email.value, e.target.password.value);
        else register(e.target.name.value, e.target.email.value, e.target.password.value);
        rememberMe(loggedIn);
    }

    const handleRememberMe = e => {
        setLoggedIn(e.target.checked);
    }

    const renderName = () => {
        if (!loginForm) {
            return (
                <div className="form-group">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
            )
        }
        return null;
    }

    if (state.isAuthenticated || localStorage.getItem('loggedIn') === 'on') {
        return <Redirect to='/workflow' />
    }

    const btnText = loginForm ? 'Login' : 'Sign up';

    const accountCheck = loginForm ? "Don't have an account? Sign up here" : "Already have an Account ? Login here";

    return (
        <main className='login-form'>
            {state.message && <Alert msg={state.message} />}
            <form onSubmit={handleSubmit}>
                <h5 className="text-center mb-5">{btnText}</h5>
                {renderName()}
                <div className="form-group">
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required={true}
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required={true}
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="clearfix mb-3 mt-3">
                    <label className="pull-left checkbox-inline"><input checked={loggedIn} type="checkbox" onChange={handleRememberMe} /> Remember me</label>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">{btnText}</button>
                </div>
                <button className="btn btn-link" onClick={handleToggle}>{accountCheck}</button>
            </form>
        </main>
    )
}

const mapStates = state => ({ state: state.user });

export default connect(mapStates, { login, register, rememberMe })(Auth);