import React, { useState } from 'react';
import Input from '../common/Input';

const Auth = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [loginForm, setLoginForm] = useState(true);

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleToggle = () => {
        setLoginForm(!loginForm)
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

    const btnText = loginForm ? 'Login' : 'Sign up';

    const accountCheck = loginForm ? "Don't have an account? Sign up here" : "Already have an Account ? Login here";

    return (
        <main className='login-form'>
            <form>
                <h3 className="text-center">{btnText}</h3>
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
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">{btnText}</button>
                </div>
                <div className="clearfix">
                    <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                </div>
            </form>
            <button className="btn btn-link" onClick={handleToggle}>{accountCheck}</button>
        </main>
    )
}

export default Auth;