import * as actionType from "./actionTypes";

export const bugAdded = description => ({
    type: actionType.BUG_ADDED,
    payload: {
        description: description
    }
});

export const bugRemoved = id => ({
    type: actionType.BUG_REMOVED,
    payload: {
        id: id
    }
});

// Below is the short hand syntax of id (same can be applied for description)
export const bugResolved = id => ({
    type: actionType.BUG_RESOLVED,
    payload: {
        id
    }
});

// This is the same code as above but written worse
// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: description
//         }
//     };
// }