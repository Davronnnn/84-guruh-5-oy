import axios from 'axios';

export const BASE_URL = 'https://api.storerestapi.com';

let axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000, //1000ms
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return error;
	}
);

// axiosInstance.interceptors.request.use(
// 	(request) => {
// 		request.headers.Authorization = `Bearer ${sessionStorage.getItem(
// 			'token'
// 		)}`;
// 		return request;
// 	},
// 	(error) => {
// 		return error;
// 	}
// );

export default axiosInstance;
