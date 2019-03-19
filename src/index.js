import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';


Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
Axios.defaults.headers.post['Content-Type'] = 'application/json'
//global zxios config
Axios.interceptors.request.use((request) => {
    console.log(request);
    //edit request config
    return request;
}, error => {
    //log the error ina central log may be
    //reject any errors so we can catch them locally
    console.log(error);
    return Promise.reject(error);
});

Axios.interceptors.response.use((response) => {
    console.log(response);
    //edit response config
    return response;
}, error => {
    //log the error ina central log may be
    //reject any errors so we can catch them locally
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
