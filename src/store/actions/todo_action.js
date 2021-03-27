import store from "../index"
import * as TYPES from "../types"
import axios from "../../utility/axios"

export const getTodos = () => async dispatch => {

    // store.dispatch({type: TYPE.LOADING, payload: true})

    store.dispatch({type: TYPES.SET_TODOS, payload: [1, 2]})
//     try {
//         // const nasa_api_response = await axios.get(`/todos`)
//     } catch (error) {
        
//         // store.dispatch({type: TYPE.SET_CURRENT_PICTURE, payload: dummy})
//     }
}