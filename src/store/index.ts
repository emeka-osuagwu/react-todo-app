import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import todoReducer from './reducers/todo_reducer';

const middleware = [thunk];

const rootReducer = combineReducers({
	todoReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
