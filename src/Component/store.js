import { legacy_createStore } from "redux"
import reducer from "./reducer"


const intilaze = {
    counter : 0
}

export const stores = legacy_createStore(reducer , intilaze)
