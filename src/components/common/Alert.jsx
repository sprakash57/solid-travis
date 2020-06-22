import React from 'react';

const Alert = ({ msg }) => {
    return <div className="alert alert-danger text-center" role="alert">{msg}</div>
}

export default Alert;