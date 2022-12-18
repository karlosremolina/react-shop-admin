import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoint) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(endPoint);
            const data = response.data;
            setData(data);
        }

        try {
            fetchData();
        } catch (error) {
            console.log('error en la conexión');
        }
    }, [endPoint]);

    return data;
};

export default useFetch;
