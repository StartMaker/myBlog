import axios from 'axios';

axios.interceptors.request.use(function (config) {
    config.headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        // 'Authorization': localStorage.getItem('pass-key')
        // 'Authorization': sessionStorage.getItem('Authorization')
    };
    config.timeout = 3000;
    config.baseURL = '/api';
    return config;
});

export default axios;