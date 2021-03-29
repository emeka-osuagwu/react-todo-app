import { AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import todos from "../demo_data"
import * as TYPES from "../../store/types";
import configureStore from 'redux-mock-store';
import * as actions from "../../store/actions";

import rootReducer from "../../store/reducers/todo_reducer"

const initialState = {};
type State = typeof initialState;
const middlewares = [thunk];
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(middlewares);
const store = mockStore(initialState);

describe('root reducer', () => {
    
    it('test reducer', async () => { 
        const expectedAction = {
            type: TYPES.SET_TODOS,
            payload: []
        }

        expect(rootReducer(null, expectedAction)).toEqual({todos: [], loading: false})
    })
    
    it('test reducer loading', async () => { 
        const expectedAction = {
            type: TYPES.LOADING,
            payload: true
        }

        expect(rootReducer(null, expectedAction)).toEqual({loading: true})
    })
    
    it('test reducer set todos', async () => { 
        const expectedAction = {
            type: TYPES.SET_TODOS,
            payload: todos
        }

        expect(rootReducer(null, expectedAction)).toEqual({todos: todos, loading: false})
    })
  })