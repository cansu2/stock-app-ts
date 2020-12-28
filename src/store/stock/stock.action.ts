import { Dispatch, ObjectHTMLAttributes } from 'react';
import { StockDispatchTypes, STOCK_FAIL, STOCK_LOADING, STOCK_SUCCESS } from './stock.types';
import axios from 'axios';

export const getStock = (stockSymbol: string) => async (dispatch: Dispatch<StockDispatchTypes>) => {
    const options: Object = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile',
        params: { symbol: stockSymbol, region: 'US' },
        headers: {
            'x-rapidapi-key': '5180de34cfmshe8f9ffb251ed473p1ac869jsn6c78951dd541',
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };

    try {
        dispatch({
            type: "STOCK_LOADING"
        })

        axios.request(options).then(function (response) {
            dispatch({
                type: "STOCK_SUCCESS",
                payload: response.data
            })
            console.log('response data', response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }
    catch (e) {
        dispatch({
            type: STOCK_FAIL
        })
    }
};