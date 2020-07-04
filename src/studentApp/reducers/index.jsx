import { combineReducers } from "redux";
import StudentsReducer, { CurrentStudent } from "./students-reducer";

export default combineReducers({
  students: StudentsReducer,
  currentStudent: CurrentStudent,
});
