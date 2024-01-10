import { GET_DASHBOARD_DATA } from './dashboardTypes';

const initialState = {
    dashboard: [],
    error: null
}

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DASHBOARD_DATA:
            return {
                ...state,
                dashboard: [...action.payload]
            };
        default:
            return state;
    }
}