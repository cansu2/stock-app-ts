import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/store";
import { getStock } from "./store/stock/stock.action";
// import Greeting from './components/Search';
import StockPanel from './components/StockPanel';
import Search from './components/Search';

function App() {
  // const dispatch = useDispatch()

  // const [stockSymbol, setStockSymbol] = useState('');

  // const stockState: any = useSelector((state: RootStore) => JSON.stringify(state.stock.stock));

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setStockSymbol(event.target.value);

  // const handleSubmit = () => dispatch(getStock(stockSymbol));

  // console.log('STOCK STATE:' + stockState);

  return (
    <div className="App">
      <Search getStock={getStock} />
      {/* <Greeting name={'cansu'} /> */}
      {/* <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button> */}
      <StockPanel />
    </div>
  );
}

export default App;
