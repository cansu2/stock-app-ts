import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { getStock } from "../store/stock/stock.action";

interface DispatchProps {
    getStock: (string: string) => void
}

const mapDispatchToProps = {
    getStock: (string: string) => { (getStock(string)) }
}

type Props = DispatchProps

const Search: FC<Props> = ({ getStock }) => {
    const [stockSymbol, setStockSymbol] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setStockSymbol(event.target.value);
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={() => getStock(stockSymbol)}>Search</button>
        </div>
    )
};

export default connect<DispatchProps>(null, mapDispatchToProps)(Search)