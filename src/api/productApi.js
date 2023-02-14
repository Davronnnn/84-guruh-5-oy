import axiosInstance from './baseApi';

export const getProducts = (data) => {
	return axiosInstance.get('/products', {
		body: data,
	});
};

// export const changeCountApi = (token, id, count) => {
// 	return axiosInstance.put(
// 		`cart/items/${id}/`,
// 		{
// 			count: count,
// 		},
// 		{
// 			headers: {
// 				Authorization: 'Bearer ' + token,
// 			},
// 		}
// 	);
// };
