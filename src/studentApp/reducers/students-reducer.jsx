import * as actions from "../actions/actionTypes";

const loadInitState = () => {
  const data = localStorage.getItem("studentStore");
  if (data != null) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const generateId = (students) => {
  let id = 1;
  while (students.map((s) => s.id).includes(id)) {
    id++;
  }
  return id;
};

export default (state = loadInitState(), action) => {
  switch (action.type) {
    case actions.POPULATE_DATA:
      return [
        { id: 1, name: "Donal Trump", age: 20, gender: true, location: "LA" },
        { id: 2, name: "Marry Drews", age: 19, gender: false, location: "LA" },
        { id: 3, name: "Joe Biden", age: 22, gender: true, location: "NY" },
        { id: 4, name: "Geroge McFly", age: 19, gender: true, location: "TX" },
        { id: 5, name: "Emily Osman", age: 21, gender: false, location: "NY" },
        { id: 6, name: "John Louis", age: 22, gender: true, location: "LA" },
        { id: 7, name: "Marry Jane", age: 19, gender: false, location: "LA" },
        { id: 8, name: "Hilary Duff", age: 19, gender: false, location: "WA" },
        { id: 9, name: "Lucky Luke", age: 22, gender: true, location: "TX" },
        { id: 10, name: "AJ Hoge", age: 22, gender: true, location: "CA" },
      ];
    case actions.SAVE_STORAGE:
      localStorage.setItem(
        "studentStore",
        JSON.stringify(action.payload.students)
      );
      return action.payload.students;
    case actions.REMOVE_STORAGE:
      localStorage.removeItem("studentStore");
      return [];
    case actions.UPDATE_STUDENT:
      if (action.payload.updatedStudent.id === 0) {
        return [
          ...state,
          { ...action.payload.updatedStudent, id: generateId(state) },
        ];
      } else {
        return state.map((student) => {
          if (student.id === action.payload.updatedStudent.id) {
            return action.payload.updatedStudent;
          }
          return student;
        });
      }
    case actions.DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload.studentId);
    default:
      return state;
  }
};

export const CurrentStudent = (state, action) => {
  switch (action.type) {
    case actions.DISPLAY_POPUP:
      return action.payload.currentStudent;

    default:
      state = { id: 0, name: "", age: "", gender: true, location: "" };
      return state;
  }
};
