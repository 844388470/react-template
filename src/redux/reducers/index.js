import {createStore,combineReducers } from "redux";
import * as aX from './a_x'
import * as bX from './b_x'

console.log(aX,bX)

const rootReducer = combineReducers({
    ...aX,
    ...bX,
})

export default rootReducer
