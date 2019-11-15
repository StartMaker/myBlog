import axios from 'axios';

axios.interceptors.request.use(function (config) {
    config.headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        // 'Authorization': localStorage.getItem('pass-key')
        // 'Authorization': sessionStorage.getItem('Authorization')
    };
    config.timeout = 3000;
    config.baseURL = 'http://172.0.0.1:3000/api';
    return config;
});

export default axios;