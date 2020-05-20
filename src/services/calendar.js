import axios from 'axios';

export const axiosSource = axios.CancelToken.source();

export const getList = (date) => axios.get('/application/timeline/getList', date);

export const getGroupInfo = () => axios.get('/application/timeline/getGroupInfo', {
	cancelToken: axiosSource.token,
});

export const getPrivateInfo = (date) => axios.get('/application/timeline/getPrivateInfo', {
	cancelToken: axiosSource.token,
});
