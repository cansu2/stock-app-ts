import { StockType, StockDispatchTypes, STOCK_FAIL, STOCK_LOADING, STOCK_SUCCESS } from './stock.types';

interface IDefaultState {
    loading: boolean,
    stock?: StockType

};

const defaultState = {
    loading: false
};

const stockReducer = (state: IDefaultState = defaultState, action: StockDispatchTypes): IDefaultState => {
    switch (action.type) {
        case STOCK_FAIL:
            return {
                loading: false,
            }
        case STOCK_LOADING:
            return {
                loading: true
            }
        case STOCK_SUCCESS:
            return {
                loading: false,
                stock: action.payload
            }
        default:
            return state;
    }
};

export default stockReducer;