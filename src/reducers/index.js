import changeTheNumber from "./updown";
import  multTheNumber from "./mulDiv"
import { combineReducers } from "redux";
const rootReducer= combineReducers({
    changeTheNumber,
    multTheNumber
})

export default rootReducer;