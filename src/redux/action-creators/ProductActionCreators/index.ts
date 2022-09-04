import { ProductActionTypes, GeneralActionTypes } from '../../action-types';
import { Dispatch } from 'redux';
import { Action } from '../../actions';
import { ProductType } from '../../types';
import ProductService from '../../../services/ProductService';

export const getAllProducts = () => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: GeneralActionTypes.SET_IS_LOADING,
			payload: true,
		});
		var products: ProductType[] = [];
		if (localStorage.getItem('products') !== null) {
			products = JSON.parse(localStorage.getItem('products') as any);

			try {
				dispatch({
					type: ProductActionTypes.SET_FILTERED_PRODUCTS,
					payload: products,
				});
			} catch (error) {
				console.log(error);
			} finally {
				dispatch({
					type: GeneralActionTypes.SET_IS_LOADING,
					payload: false,
				});
			}
		} else {
			ProductService.get('products')
				.then((response: any) => {
					products = response.data;
					localStorage.setItem('products', JSON.stringify(products));

					dispatch({
						type: ProductActionTypes.SET_FILTERED_PRODUCTS,
						payload: products,
					});
				})
				.catch((error: any) => {
					console.log('Error: ', error);
					dispatch({
						type: GeneralActionTypes.SET_MESSAGE,
						payload: {
							text: error.response.data.message,
							level: 'warning',
						},
					});
				})
				.finally(() => {
					dispatch({
						type: GeneralActionTypes.SET_IS_LOADING,
						payload: false,
					});
				});
		}
	};
};
