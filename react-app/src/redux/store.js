import { createStore } from 'redux'
import signInReducer from './signin/signInReducer'

const store = createStore(signInReducer)


export default store