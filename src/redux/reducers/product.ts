import { productsInitialState } from '../initial-states';
import { Action } from '../actions';
import { ProductActionTypes } from '../action-types';

export default (state: any = productsInitialState, action: Action) => {
	switch (action.type) {
		case ProductActionTypes.SET_FILTERED_PRODUCTS:
			return { ...state, data: action.payload };
		default:
			return state;
	}
};
