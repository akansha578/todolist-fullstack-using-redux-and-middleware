
import {deleteTodoSuccess,deleteTodoFailure} from "../action/action"
export const apiMiddleware = store => next => action => {
  if (action.type === 'FETCH_USERS_REQUEST') {
    store.dispatch({ type: 'FETCH_USERS_LOADING' });

    fetch('http://localhost:8080/api/v1/tasks/')
      .then(response => response.json())
      .then(data => {
        store.dispatch({
          type: 'FETCH_USERS_SUCCESS',
          payload: data
        });
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        
      });
  }
  else if (action.type === 'DELETE_TODO_REQUEST') {
    store.dispatch({ type: 'DELETE_TODO_LOADING' }); 

    const id = action.id;
    fetch(`http://localhost:8080/api/v1/tasks/${id}`, { method: 'DELETE' })
      .then(() => {
        store.dispatch(deleteTodoSuccess(id));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        store.dispatch(deleteTodoFailure(error));
      });
  }
  return next(action);
};


