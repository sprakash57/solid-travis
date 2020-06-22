import React, { useState } from 'react';
import Input from '../common/Input';
import Filter from '../common/Filter';
import WorkflowCard from '../common/WorkflowCard';
import { connect } from 'react-redux';
import { createFlow, deleteFlow, modifyFlow } from '../../actions/workflow';

const Workflow = ({ state, createFlow, deleteFlow, modifyFlow }) => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState({
        items: state.workflows,
        status: ''
    })

    const handleSearch = e => {
        const pattern = new RegExp(e.target.value, 'gi');
        const filtered = state.workflows.filter(workflow => pattern.test(workflow.name));
        setFilter({ ...filter, items: filtered });
        setSearch(e.target.value);
    }

    const handleFilter = e => {
        let filteredFlows = state.workflows;
        if (e.target.value !== 'all')
            filteredFlows = state.workflows.filter(workflow => workflow.status === e.target.value);
        setFilter({
            ...filter,
            items: filteredFlows.length ? filteredFlows : filter.items,
            status: e.target.value
        })
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
                        value={search}
                        onChange={handleSearch}
                    />
                </section>
                <section className="col-2">
                    <Filter value={filter.status} onChange={handleFilter} />
                </section>
                <section className="col-5 text-right">
                    <button className='btn btn-success' onClick={handleCreate}>Create</button>
                </section>
            </section>
            <section className="task-row">
                {filter.items.length
                    ? filter.items.map((workflow, i) => <WorkflowCard
                        key={i}
                        workflow={workflow}
                        onDelete={handleDelete}
                        onStatusChange={handleStatusChange}
                    />)
                    : null
                }
            </section>
        </main>
    )
}

const mapStates = state => ({ state: state.workflow })

export default connect(mapStates, { createFlow, deleteFlow, modifyFlow })(Workflow);