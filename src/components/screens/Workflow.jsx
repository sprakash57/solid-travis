import React, { useState } from 'react';
import Input from '../common/Input';
import Filter from '../common/Filter';
import WorkflowCard from '../common/WorkflowCard';
import { connect } from 'react-redux';
import { createFlow, deleteFlow, modifyFlow } from '../../actions/workflow';

const Workflow = ({ state, createFlow, deleteFlow, modifyFlow }) => {
    const [filter, setFilter] = useState();
    const handleChange = e => {
        setFilter(e.target.value)
    }

    const handleCreate = () => {
        createFlow();
    }

    const handleDelete = id => {
        deleteFlow(id);
    }

    const handleStatusChange = workflow => {
        modifyFlow(workflow);
    }

    return (
        <main className="container-fluid mt-3">
            <section className="row section-border">
                <section className="col-5">
                    <Input
                        type='text'
                        placeholder='Search Workflows'
                        name='search'
                    />
                </section>
                <section className="col-2">
                    <Filter value={filter} onChange={handleChange} />
                </section>
                <section className="col-5 text-right">
                    <button className='btn btn-success' onClick={handleCreate}>Create</button>
                </section>
            </section>
            <section className="task-row">
                {state.workflows.map((workflow, i) => <WorkflowCard
                    key={i}
                    workflow={workflow}
                    onDelete={handleDelete}
                    onStatusChange={handleStatusChange}
                />)}
            </section>
        </main>
    )
}

const mapStates = state => ({ state: state.workflow })

export default connect(mapStates, { createFlow, deleteFlow, modifyFlow })(Workflow);