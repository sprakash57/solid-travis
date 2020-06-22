const { CREATE_FLOW, DELETE_FLOW, TOGGLE_FLOW_STATUS, MODIFY_TASK, CREATE_TASK, DELETE_ERROR, MODIFY_FLOW } = require("../constants");

const initState = {
    workflows: JSON.parse(localStorage.getItem('workflows')),
    message: ''
}

const workflow = (state = initState, action) => {
    const { type, data } = action;
    switch (type) {
        case MODIFY_TASK:
        case CREATE_TASK:
        case CREATE_FLOW:
        case MODIFY_FLOW:
            return { ...state, workflows: data }
        case DELETE_FLOW:
            return { ...state, workflows: data }
        case TOGGLE_FLOW_STATUS:
            return { ...state, workflows: data }
        case DELETE_ERROR:
            return { ...state, message: data }
        default:
            return state;
    }
}

export default workflow;