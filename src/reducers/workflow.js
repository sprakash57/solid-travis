const { CREATE_FLOW, DELETE_FLOW, TOGGLE_FLOW_STATUS } = require("../constants");

const initState = {
    workflows: JSON.parse(localStorage.getItem('workflows'))
}

const workflow = (state = initState, action) => {
    const { type, data } = action;
    switch (type) {
        case CREATE_FLOW:
            return { ...state, workflows: data }
        case DELETE_FLOW:
            return { ...state, workflows: data }
        case TOGGLE_FLOW_STATUS:
            return { ...state, workflows: data }
        default:
            return state;
    }
}

export default workflow;