import cellsReducer from "./cellsReducer";
import bundlesReducer from "./bundlesReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
