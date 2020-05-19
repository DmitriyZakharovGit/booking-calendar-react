import axios from 'axios';

export const GetList = () => axios.get('/application/timeline/getList');
