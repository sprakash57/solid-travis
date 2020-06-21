import { v4 as uuid } from 'uuid';
import { CREATE_FLOW, DELETE_FLOW } from "../constants";

export const createFlow = () => dispatch => {
    const workflows = JSON.parse(localStorage.getItem('workflows')) || [];
    const newWorkflow = { id: uuid(), name: `WORKFLOW ${workflows.length + 1}`, status: 'PENDING', tasks: [] };
    workflows.push(newWorkflow);
    localStorage.setItem('workflows', JSON.stringify(workflows));
    dispatch({ type: CREATE_FLOW, data: workflows })
}

export const deleteFlow = id => dispatch => {
    let workflows = JSON.parse(localStorage.getItem('workflows')) || [];
    workflows = workflows.filter(workflow => workflow.id !== id);
    localStorage.setItem('workflows', JSON.stringify(workflows));
    dispatch({ type: DELETE_FLOW, data: workflows })
}