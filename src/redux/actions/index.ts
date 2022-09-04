import { ProductActionTypes, GeneralActionTypes } from '../action-types';
import { ProductType, MessageType } from '../types';

interface SetProducts {
	type: ProductActionTypes.SET_FILTERED_PRODUCTS;
	payload: ProductType[];
}

interface SetIsLoading {
	type: GeneralActionTypes.SET_IS_LOADING;
	payload: boolean;
}

interface SetMessage {
	type: GeneralActionTypes.SET_MESSAGE;
	payload: MessageType;
}

interface ResetMessage {
	type: GeneralActionTypes.RESET_MESSAGE;
}

interface Reset {
	type: GeneralActionTypes.RESET;
}

export type Action =
	| SetProducts
	| SetIsLoading
	| SetMessage
	| ResetMessage
	| Reset;
