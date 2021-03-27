import axios from 'axios'
import TODO_API  from './config'

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export default axios.create({
    baseURL: TODO_API,
    headers
});
