import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import languageReducer from "./language/languageReducer";
import paybridgeReducer from "./paybridge/paybridgeReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    language: languageReducer,
    paybridge: paybridgeReducer
})

export default rootReducer;