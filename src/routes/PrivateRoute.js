import React from 'react';
import { connect } from 'react-redux';
const { Route, Redirect } = require("react-router-dom")

const PrivateRoute = ({ component: Component, state, ...rest }) => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'on';
    return (
        <Route
            {...rest}
            render={props => state.isAuthenticated || isLoggedIn
                ? <Component {...props} />
                : <Redirect to='/' />}
        />
    )
}

const mapState = state => ({ state: state.user })

export default connect(mapState)(PrivateRoute);