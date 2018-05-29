import axios from 'axios';

const API = axios.create({
    baseURL: 'https://iTunes.apple.com/',
    timeout: 30000,
    withCredentials: false,
    headers: {'Access-Control-Allow-Origin': 'https://iTunes.apple.com'}
});

export default API;