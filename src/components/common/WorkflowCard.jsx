/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { modifyFlow } from '../../actions/workflow';

const WorkflowCard = ({ workflow, onDelete, modifyFlow }) => {
    const { id, name, status, tasks } = workflow;
    const [statusColor, setStatusColor] = useState(status);
    const [showTrash, setShowTrash] = useState(false);

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
        modifyFlow(workflow);
    }

    const showTrashIcon = () => {
        setShowTrash(true);
    }

    const hideTrashIcon = () => {
        setShowTrash(false);
    }

    useEffect(() => {
        let color = 'pending';
        if (tasks.length && tasks.every(task => task.status === 'completed')) color = 'completed';
        setStatusColor(color);
        workflow.status = color;
        modifyFlow(workflow);
    }, [workflow])

    return (
        <section className="card workflow-card mr-5" onMouseEnter={showTrashIcon} onMouseLeave={hideTrashIcon}>
            <article className='workflow-title'>
                <p className='workflow-name'><Link to={`/workflow/${id}`}>{name}</Link></p>
                {showTrash && <FontAwesomeIcon icon={faTrash} className='trash-icon corner' size='2x' color='white' onClick={handleDelete} />}
            </article>
            <article className='workflow-status'>
                <small className='mr-5 w-50'>{statusColor.toUpperCase()}</small>
                <FontAwesomeIcon icon={faCheck} className={statusColor} size='2x' color='white' onClick={handleStatus} />
            </article>
        </section>
    )
}

export default connect(null, { modifyFlow })(WorkflowCard);