import { Dispatch } from "redux";
import * as TYPES from "../types";

export const updateTodoState = (data: TYPES.TodoInterface[]) => async (dispatch: Dispatch<TYPES.TodoDispatchTypes>) => {
    return dispatch({ 
        type: TYPES.SET_TODOS, 
        payload: data 
    });
};