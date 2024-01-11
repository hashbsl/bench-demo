import { GET_DASHBOARD_DATA } from './dashboardTypes';
import axios from 'axios';

export const showDashboard = () => (dispatch) => {
    try {
        return axios.get('https://fakestoreapi.com/products?limit=15').then(dashboard => {
                        dispatch({
                type: GET_DASHBOARD_DATA,
                payload: dashboard.data
            })
        })
    } catch(error) {console.log('error', error)};
}