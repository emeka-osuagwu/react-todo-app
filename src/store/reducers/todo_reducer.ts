import * as TYPES from "../types";

interface DefaultStateI {
    loading: boolean,
    todos: Array<TYPES.TodoInterface>
  }
  
  const initialState: DefaultStateI = {
    todos: [],
    loading: false
  };

export default function (state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {

        case TYPES.LOADING:
            return {
                ...state,
                loading: payload,
            };

        case TYPES.SET_TODOS:
            return {
                ...state,
                todos: payload,
                loading: false,
            };

        default:
            return state;
    }
}
