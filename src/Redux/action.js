import * as types from "./actionTypes";
import axios from "axios";

// GET TODOS (GET)
export const getTodos = () => (dispatch) => {
  dispatch({ type: types.GET_TODO_REQUEST });

  return axios
    .get(`http://localhost:8080/todos`)
    .then((res) => {
      dispatch({ type: types.GET_TODO_SUCCESS, payload: res.data });
    })
    .catch((res) => {
      dispatch({ type: types.GET_TODO_FAILURE, payload: res });
    });
};

// ADD TODOS (POST)
export const addTodos = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_TODO_REQUEST });

  try {
    const res = await axios.post(`http://localhost:8080/todos`, payload);
    dispatch({ type: types.ADD_TODO_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: types.ADD_TODO_FAILURE, payload: e });
  }
};

// EDIT TODOS (PATCH)
export const editTodos = (id, payload) => async (dispatch) => {
  dispatch({ type: types.EDIT_TODO_REQUEST });

  try {
    const res = await axios.patch(`http://localhost:8080/todos/${id}`, payload);
    dispatch({ type: types.EDIT_TODO_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: types.EDIT_TODO_FAILURE, payload: e });
  }
};

// DELETE TODOS
export const deleteTodos = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_TODO_REQUEST });

  try {
    const res = await axios.delete(`http://localhost:8080/todos/${id}`);
    dispatch({ type: types.DELETE_TODO_SUCCESS, payload: id });
  } catch (e) {
    dispatch({ type: types.DELETE_TODO_FAILURE, payload: e });
  }
};
