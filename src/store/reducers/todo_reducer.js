import * as TYPES from '../types'

const initialState = {
	todos: [],
}

export default function (state = initialState, action) {

	const { type, payload } = action;

	switch(type){

		case TYPES.TODOS:

			let new_todo = state.todos
			new_todo.unshift(payload)

			return {
				...state,
				todo: new_todo
			}

		case TYPES.SET_TODOS:

			return {
				...state,
				todos: payload
			}

		default:
			return state
		}
}