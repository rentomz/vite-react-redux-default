import { combineReducers } from "redux";
import testReducer from "./reducers/TestReducer";


const RootReducer = combineReducers({
  test: testReducer,
});

export default RootReducer;
