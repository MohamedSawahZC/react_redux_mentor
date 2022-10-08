import { legacy_createStore as createStore } from 'redux';
import { reducerCounter } from './reducer';

//1-Create Store
export const store = createStore(reducerCounter);