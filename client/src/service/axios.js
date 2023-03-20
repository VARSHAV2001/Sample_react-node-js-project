import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 1000,
});

Axios.interceptors.request.use((request) => {

    if (localStorage.getItem('token')) {
        request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return request;
    }   

    return request;
});

export default Axios;