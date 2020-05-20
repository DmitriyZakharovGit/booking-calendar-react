import axios from 'axios';

export const getList = (date) => axios.get('/application/timeline/getList', date);
