import React, { FC } from 'react';
import { connect } from 'react-redux';

interface RootState {
    stock: object
}

const mapStateToProps = (state: RootState) => ({
    stock: state.stock
})

type StateProps = ReturnType<typeof mapStateToProps>

const StockPanel: FC<StateProps> = ({ stock }) => {
    return <h1> {JSON.stringify(stock)} </h1>
};

export default connect(mapStateToProps)(StockPanel)