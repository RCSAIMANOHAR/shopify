import { combineReducers } from "redux";
import mensReducer from "./mensReducer";
import womensReducer from "./womenReducer";
import phonesReducer from "./phoneReducers";

export default combineReducers({
  mens: mensReducer,
  womens: womensReducer,
  phones: phonesReducer
});
