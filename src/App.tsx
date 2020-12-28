import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/store";
import { getStock } from "./store/stock/stock.action";

function App() {
  const dispatch = useDispatch()

  const [stockSymbol, setStockSymbol] = useState('');

  const stockState = useSelector((state: RootStore) => state.stock.stock);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setStockSymbol(event.target.value);

  const handleSubmit = () => dispatch(getStock(stockSymbol));

  console.log('STOCK STATE:' + JSON.stringify(stockState));

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
