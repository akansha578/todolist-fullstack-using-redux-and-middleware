import axios from 'axios';

export const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST',
});

export const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: 'FETCH_USERS_FAILURE',
  payload: error,
});

export const deleteTodoRequest = (id) => ({
  type: 'DELETE_TODO_REQUEST',
  id, 
});

export const deleteTodoSuccess = (id) => ({
  type: 'DELETE_TODO_SUCCESS',
  id, 
});

export const deleteTodoFailure = (error) => ({
  type: 'DELETE_TODO_FAILURE',
  payload: error,
});

export const addTodo = (task) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/tasks/', { task });
    dispatch({ type: 'ADD_TODO_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_TODO_FAILURE', payload: error.message });
  }
};
