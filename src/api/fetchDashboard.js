async function fetchDashboard() {
    try {
        await fetch('https://fakestoreapi.com/products?limit=5')
            .then(resp => resp.json())
            .then(json => {
                console.log('json', json)
                return json;
            });
    } catch (error) {
        console.log('error', error)
    } finally {
        console.log('log the data');
    }
}

export { fetchDashboard }