import { GET_DASHBOARD_DATA } from './dashboardTypes';

export const showDashboard = (dashboard) => {
    return {
        type: GET_DASHBOARD_DATA,
        dashboard
    }
}
