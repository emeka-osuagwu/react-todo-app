import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxPromise from "redux-promise";
import todoReducer from './reducers/todo_reducer';


const rootReducer = combineReducers({
	todoReducer,
});

const middlewares = applyMiddleware(
  thunk,
  reduxPromise
);

const Store = createStore(
  rootReducer,
  composeWithDevTools(middlewares)
);

export type RootStore = ReturnType<typeof rootReducer>

export default Store
