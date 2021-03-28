import {Dispatch} from "redux";
import * as TYPES from "../types";
import axios from "../../utility/axios";

export const updateTodoState = (data: TYPES.TodoInterface) => async (dispatch: Dispatch<TYPES.TodoDispatchTypes>) => {
    dispatch({ type: TYPES.SET_TODOS, payload: data });
};