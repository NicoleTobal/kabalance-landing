import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import languageReducer from "./language/languageReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    language: languageReducer
})

export default rootReducer;