import React from 'react';

const Task = ({ match }) => {
    return <div>{match.params.id}</div>
}

export default Task;