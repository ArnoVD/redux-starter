import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
            // Go through every bug and check if the id is the same as given to the action
            // If that's true then set the resolved to true and else return the current bug
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
        default:
            return state;
    }
}
