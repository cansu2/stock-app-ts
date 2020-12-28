import { combineReducers } from 'redux';
import stockReducer from './stock/stock.reducer';

const RootReducer = combineReducers({
    stock: stockReducer
});

export default RootReducer;