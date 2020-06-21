import { v4 as uuid } from 'uuid';
import { CREATE_FLOW, DELETE_FLOW, MODIFY_TASK, CREATE_TASK, DELETE_ERROR } from "../constants";

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

export const createTask = id => (dispatch, getState) => {
    const { workflow: { workflows } } = getState();
    const currentWorkflow = workflows.find(workflow => workflow.id === id);
    const newTask = { id: uuid(), name: `TASK ${currentWorkflow.tasks.length + 1}`, status: 'pending', content: 'Put your task details in this area' };
    currentWorkflow.tasks.push(newTask);
    localStorage.setItem('workflows', JSON.stringify(workflows));
    dispatch({ type: CREATE_TASK, data: workflows });
}

export const deleteTask = id => (dispatch, getState) => {
    const { workflow: { workflows } } = getState();
    const currentWorkflow = workflows.find(workflow => workflow.id === id);
    if (currentWorkflow.tasks.length) {
        currentWorkflow.tasks.pop();
        localStorage.setItem('workflows', JSON.stringify(workflows));
        dispatch({ type: CREATE_TASK, data: workflows });
    } else {
        dispatch({ type: DELETE_ERROR, data: 'No tasks present' });
    }
}

export const modifyTask = (task, flowId) => (dispatch, getState) => {
    const { id } = task
    const { workflow: { workflows } } = getState();
    const currentWorkflow = workflows.find(workflow => workflow.id === flowId);
    let index = currentWorkflow.tasks.findIndex(task => task.id === id);
    currentWorkflow.tasks[index] = task;
    localStorage.setItem('workflows', JSON.stringify(workflows));
    dispatch({ type: MODIFY_TASK, data: workflows });
}
