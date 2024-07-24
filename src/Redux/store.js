
import { applyMiddleware, createStore } from 'redux';
import userReducer from './Reducers/todosReducer';
import {apiMiddleware} from './Thunks/todosThunks';
import {thunk} from 'redux-thunk';
const store = createStore(
	userReducer,
	applyMiddleware(thunk,apiMiddleware)
);

export default store;
