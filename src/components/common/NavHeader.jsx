import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user';

const NavHeader = ({ state, logout }) => {

    const handleLogout = () => {
        logout();
        window.location.reload();
    }

    return (
        <nav className='navbar nav-bg justify-content-between'>
            <Link to='/workflow'>FlowApp</Link>
            {state.isAuthenticated &&
                <button className="btn btn-light" onClick={handleLogout}>
                    Logout
                </button>
            }
        </nav>
    )
}

const mapStates = state => ({ state: state.user });

export default connect(mapStates, { logout })(NavHeader);
