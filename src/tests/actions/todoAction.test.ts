import { AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import todos from "../demo_data"
import * as TYPES from "../../store/types";
import configureStore from 'redux-mock-store';
import * as actions from "../../store/actions";

const initialState = {};
type State = typeof initialState;
const middlewares = [thunk];
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(middlewares);
const store = mockStore(initialState);

describe('actions', () => {
    
    it('should create an action to add a todo', async () => { 
        const expectedAction = {
            type: TYPES.SET_TODOS,
            payload: todos
        }

        expect(await store.dispatch(actions.updateTodoState(todos))).toEqual(expectedAction)
    })
  })