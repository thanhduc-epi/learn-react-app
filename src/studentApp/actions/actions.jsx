import * as actions from "./actionTypes";

export const populateData = () => ({
  type: actions.POPULATE_DATA,
});

export const saveStorage = (data) => ({
  type: actions.SAVE_STORAGE,
  payload: {
    students: data,
  },
});

export const removeStorage = () => ({
  type: actions.REMOVE_STORAGE,
});

export const displayPopup = (currentStudent) => ({
  type: actions.DISPLAY_POPUP,
  payload: {
    currentStudent: currentStudent,
  },
});

export const updateStudent = (updatedStudent) => ({
  type: actions.UPDATE_STUDENT,
  payload: {
    updatedStudent: updatedStudent,
  },
});

export const deleteStudent = (studentId) => ({
  type: actions.DELETE_STUDENT,
  payload: {
    studentId: studentId,
  },
});
