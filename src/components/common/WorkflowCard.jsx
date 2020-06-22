import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const WorkflowCard = ({ workflow, onDelete }) => {
    const { id, name, status } = workflow;
    const statusColor = status => status === 'PENDING' ? 'pending' : 'completed';

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <section className="card workflow-card">
            <article className='workflow-title'>
                <h6><Link to={`/workflow/${id}`}>{name}</Link></h6>
                <FontAwesomeIcon icon={faTrash} className='trash-icon corner' size='2x' color='white' onClick={handleDelete} />
            </article>
            <article className='workflow-title'>
                <p>{status}</p>
                <FontAwesomeIcon icon={faCheck} className={statusColor(status)} size='2x' color='white' />
            </article>
        </section>
    )
}

export default WorkflowCard;