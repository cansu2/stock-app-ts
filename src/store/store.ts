import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from "./root.reducer";
import thunk from 'redux-thunk';

const Store = createStore(RootReducer, compose(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>

export default Store;