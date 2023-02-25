import * as types from "./actionTypes";
import axios from "axios";

// GET NOTES (GET)
export const getNotes = () => (dispatch) => {
  dispatch({ type: types.GET_NOTE_REQUEST });

  return axios
    .get(`http://localhost:8080/notes`)
    .then((res) => {
      dispatch({ type: types.GET_NOTE_SUCCESS, payload: res.data });
    })
    .catch((res) => {
      dispatch({ type: types.GET_NOTE_FAILURE, payload: res });
    });
};

// ADD NOTES (POST)
export const addNotes = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_NOTE_REQUEST });

  try {
    const res = await axios.post(`http://localhost:8080/notes`, payload);
    dispatch({ type: types.ADD_NOTE_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: types.ADD_NOTE_FAILURE, payload: e });
  }
};

// EDIT NOTES (PATCH)
export const updateNotes = (editedNotes) => async (dispatch) => {
  dispatch({ type: types.EDIT_NOTE_REQUEST });

  try {
    const res = await axios.patch(`http://localhost:8080/notes/${editedNotes.id}`, editedNotes);
    dispatch({ type: types.EDIT_NOTE_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: types.EDIT_NOTE_FAILURE, payload: e });
  }
};

// DELETE NOTES
export const deleteNotes = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_NOTE_REQUEST });

  try {
    const res = await axios.delete(`http://localhost:8080/notes/${id}`);
    dispatch({ type: types.DELETE_NOTE_SUCCESS, payload: id });
  } catch (e) {
    dispatch({ type: types.DELETE_NOTE_FAILURE, payload: e });
  }
};
