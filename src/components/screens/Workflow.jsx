import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Filter from '../common/Filter';
import WorkflowCard from '../common/WorkflowCard';
import { connect } from 'react-redux';
import { createFlow, deleteFlow } from '../../actions/workflow';

const Workflow = ({ state, createFlow, deleteFlow }) => {
    const [search, setSearch] = useState('');
    const [filterValue, setFilterValue] = useState('all');
    const [filter, setFilter] = useState(state.workflows);

    const handleSearch = e => {
        setSearch(e.target.value);
        const pattern = new RegExp(e.target.value, 'gi');
        const filtered = state.workflows.filter(workflow => pattern.test(workflow.name));
        setFilter(filtered);
    }

    const handleFilter = e => {
        setFilterValue(e.target.value);
    }

    const handleCreate = () => {
        createFlow();
    }

    const handleDelete = id => {
        deleteFlow(id);
    }

    useEffect(() => {
        let filteredFlows = state.workflows;
        if (filterValue !== 'all') filteredFlows = filteredFlows.filter(workflow => workflow.status === filterValue);
        setFilter(filteredFlows);
    }, [filterValue, state])

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
                    <Filter value={filterValue} onChange={handleFilter} />
                </section>
                <section className="col-5 text-right">
                    <button className='btn btn-success' onClick={handleCreate}>Create</button>
                </section>
            </section>
            <section className="task-row">
                {filter.length
                    ? filter.map((workflow, i) => <WorkflowCard
                        key={i}
                        workflow={workflow}
                        onDelete={handleDelete}
                    />)
                    : null
                }
            </section>
        </main>
    )
}

const mapStates = state => ({ state: state.workflow })

export default connect(mapStates, { createFlow, deleteFlow })(Workflow);