import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";

const AllReducers = combineReducers({ search: SearchReducer });

export default AllReducers;