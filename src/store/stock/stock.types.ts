export const STOCK_LOADING = "STOCK_LOADING";
export const STOCK_FAIL = "STOCK_FAIL";
export const STOCK_SUCCESS = "STOCK_SUCCESS";

export type StockType = {
    symbol: StockSymbol,
    stockPrice: StockPrice[],
    stockSummaryDetail: StockSummaryDetail[]
};

export type StockSymbol = string;

export type StockPrice = {
    regularMarketOpen: {
        raw: string,
        fmt: string
    },
    shortName: string,
    currencySymbol: string
}

export type StockSummaryDetail = {
    previousClose: {
        raw: string,
        fmt: string
    },
    currency: string,
    dayLow: {
        raw: string,
        fmt: string
    }

}

export interface IStockLoading {
    type: typeof STOCK_LOADING
}

export interface IStockFail {
    type: typeof STOCK_FAIL
}

export interface IStockSuccess {
    type: typeof STOCK_SUCCESS,
    payload: StockType
}

export type StockDispatchTypes = IStockLoading | IStockFail | IStockSuccess;