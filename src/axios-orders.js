import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-gj.firebaseio.com/',
});

export default instance;