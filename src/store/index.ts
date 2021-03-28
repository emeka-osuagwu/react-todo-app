import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import todoReducer from './reducers/todo_reducer';

const middleware = [thunk];

const rootReducer = combineReducers({
	todoReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootStore = ReturnType<typeof rootReducer>
export default Store
