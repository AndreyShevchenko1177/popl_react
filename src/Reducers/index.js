import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function usersDataReducer(state, action) {
    console.group("STATE - ACTION");
    console.log(state);
    console.log(action);
    console.groupEnd();

    if (state === undefined) {
        return [];
    }

    if (action.type === "GETDATA") {
        return [action.data];
    }

    return state;
}

function promiseReducer(state = {}, action) {
    if (state === undefined) {
        return {};
    }

    // if (["LOGOUT", "LOGIN"].includes(action.type)) return {};
    if (action.type === "PROMISE") {
        const { name = "default", status, payload, error } = action;
        if (status) {
            return {
                ...state,
                [name]: {
                    status,
                    payload: (status === "PENDING" && state[name] && state[name].payload) || payload,
                    error,
                },
            };
        }
    }
    return state;
}

export const store = createStore(
    combineReducers({
        usersData: usersDataReducer,
        promise: promiseReducer,
    }),
    applyMiddleware(thunk)
);

store.subscribe(() => console.log("STORE CHANGED: ", store.getState()));
