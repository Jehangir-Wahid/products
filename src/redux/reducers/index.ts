import { combineReducers } from 'redux';
import generalReducer from './general';
import productReducer from './product';

const reducers = combineReducers({
	productReducer,
	generalReducer,
});

export default reducers;
