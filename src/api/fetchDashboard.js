import axios from "axios";

export default async function fetchDashboard() {
    try {
        await axios.get('https://fakestoreapi.com/products?limit=5')
            .then(response => {
                return response.data;
            });
    } catch (error) {
        console.log('error', error)
    } finally {
        console.log('log the data');
    }
}

