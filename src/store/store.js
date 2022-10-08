import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from '../reducer/rootReducer';
//1-Create Store
export const store = createStore(rootReducer);