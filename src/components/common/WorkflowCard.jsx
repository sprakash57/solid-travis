import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const WorkflowCard = ({ workflow, onDelete, onStatusChange }) => {
    const { id, name, status, tasks } = workflow;
    const [statusColor, setStatusColor] = useState()

    const handleDelete = () => {
        onDelete(id);
    }

    const handleStatus = () => {
        let colorCheck = 'pending';
        if (tasks.length && tasks.every(task => task.status === 'completed')) {
            colorCheck = statusColor === 'completed' ? 'pending' : 'completed';
        }
        setStatusColor(colorCheck);
        workflow.status = colorCheck;
        onStatusChange(workflow);
    }

    useEffect(() => {
        handleStatus();
    }, [workflow])

    return (
        <section className="card workflow-card">
            <article className='workflow-title'>
                <p className='workflow-name'><Link to={`/workflow/${id}`}>{name}</Link></p>
                <FontAwesomeIcon icon={faTrash} className='trash-icon corner' size='2x' color='white' onClick={handleDelete} />
            </article>
            <article className='workflow-status'>
                <small className='mr-5 w-50'>{status.toUpperCase()}</small>
                <FontAwesomeIcon icon={faCheck} className={statusColor} size='2x' color='white' onClick={handleStatus} />
            </article>
        </section>
    )
}

export default WorkflowCard;