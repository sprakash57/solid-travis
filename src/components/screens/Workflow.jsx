import React, { useState } from 'react';
import Input from '../common/Input';
import Filter from '../common/Filter';
import WorkflowCard from '../common/WorkflowCard';
import { connect } from 'react-redux';
import { createFlow, deleteFlow } from '../../actions/workflow';

const Workflow = ({ state, createFlow, deleteFlow }) => {
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

    return (
        <main className="container-fluid mt-3">
            <section className="row">
                <section className="col-5">
                    <Input
                        type='text'
                        placeholder='Search Workflows'
                        name='search'
                    />
                </section>
                <section className="col-3">
                    <Filter value={filter} onChange={handleChange} />
                </section>
                <section className="col-4">
                    <button className='btn btn-success' onClick={handleCreate}>Create</button>
                </section>
            </section>
            <section className="row mt-5">
                {state.workflows.map((workflow, i) => <WorkflowCard
                    key={i}
                    name={workflow.name}
                    status={workflow.status}
                    id={workflow.id}
                    onDelete={handleDelete}
                />)}
            </section>
        </main>
    )
}

const mapStates = state => ({ state: state.workflow })

export default connect(mapStates, { createFlow, deleteFlow })(Workflow);