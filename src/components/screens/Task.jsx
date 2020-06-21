import React, { useState } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import TaskCard from '../common/TaskCard';
import { createTask, deleteTask } from '../../actions/workflow';

const Task = ({ match, state, createTask, deleteTask }) => {
    const { id } = match.params;
    const { name, tasks } = state.workflows.find(workflow => workflow.id === id);
    const [flowName, setflowName] = useState(name);

    const handleChange = e => {
        setflowName(e.target.value);
    }

    const handleAdd = () => {
        createTask(id);
    }

    const handleDelete = () => {
        deleteTask(id);
    }

    return (
        <main className="container-fluid mt-3">
            <section className="row">
                <section className="col-4">
                    <Input
                        type='text'
                        value={flowName}
                        onChange={handleChange}
                    />
                </section>
                <section className="col-6 offset-2">
                    <button className='btn btn-info'>Shuffle</button>
                    <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                    <button className='btn btn-success' onClick={handleAdd}>Add</button>
                    <button className='btn btn-primary'>Save</button>
                </section>
            </section>
            <section className="row mt-5">
                {tasks.length ? tasks.map((task, i) => <TaskCard key={i} task={task} flowId={id} />) : null}
            </section>
        </main>
    )
}

const mapStates = state => ({ state: state.workflow });

export default connect(mapStates, { createTask, deleteTask })(Task);