/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Input from './Input';
import { modifyTask } from '../../actions/workflow';
import { connect } from 'react-redux';

const TaskCard = ({ task, flowId, modifyTask }) => {
    const [details, setDetails] = useState(task)

    const handleChange = e => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const handleContent = e => {
        if (task.content !== e.target.value)
            modifyTask({ ...details, content: e.target.value }, flowId);
    }

    const handleName = e => {
        if (task.name !== e.target.value)
            modifyTask({ ...details, name: e.target.value }, flowId)
    }

    const handleStatus = () => {
        if (details.status !== 'completed') {
            const status = details.status === 'pending' ? "inprogress" : 'completed';
            setDetails({ ...details, status });
            modifyTask({ ...details, status }, flowId);
        }
    }

    return (
        <section className="card workflow-card">
            <article className='workflow-title'>
                <Input type='text' name='name' value={details.name} onChange={handleChange} onBlur={handleName} />
                <FontAwesomeIcon icon={faCheck} className={`${details.status} corner`} size='2x' color='white' onClick={handleStatus} />
            </article>
            <article>
                <textarea name='content' onChange={handleChange} value={details.content} onBlur={handleContent} />
            </article>
        </section>
    )
}

export default connect(null, { modifyTask })(TaskCard);