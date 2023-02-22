import * as types from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // get
    case types.GET_TODO_REQUEST:
      return { ...oldState, isLoading: true };
    case types.GET_TODO_SUCCESS:
      return { ...oldState, isLoading: false, todos: payload };
    case types.GET_TODO_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    // post
    case types.ADD_TODO_REQUEST:
      return { ...oldState, isLoading: true };
    case types.ADD_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        todos: [...oldState.todos, payload],
      };
    case types.ADD_TODO_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    // patch
    case types.EDIT_TODO_REQUEST:
      return { ...oldState, isLoading: true };
    case types.EDIT_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        todos: oldState.todos.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case types.EDIT_TODO_FAILURE:
      return { ...oldState, isLoading: false, isError: false };

    // delete
    case types.DELETE_TODO_REQUEST:
      return { ...oldState, isLoading: true };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        todos: oldState.todos.filter((todo) => todo.id !== payload),
      };
    case types.DELETE_TODO_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    default:
      return oldState;
  }
};

export default reducer;
