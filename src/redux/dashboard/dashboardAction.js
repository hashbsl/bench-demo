import { GET_DASHBOARD_DATA } from './dashboardTypes';
import axios from 'axios';

export const showDashboard = () => (dispatch) => {
    try {
        return axios.get('https://fakestoreapi.com/products?limit=5').then(dashboard => {
            dispatch({
                type: GET_DASHBOARD_DATA,
                dashboard
            })
        })
    } catch(error) {console.log('error', error)};
}
