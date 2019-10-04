import axios from 'axios'

const api = axios.create({
        baseURL: 'http://10.253.0.51:19000'
    });

export default api;

