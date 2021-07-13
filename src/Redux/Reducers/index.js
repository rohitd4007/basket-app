import { combineReducers } from "redux"
import { productReducer } from "./productReducers"


const reducers = combineReducers({
    allproducts: productReducer
})

export default reducers;