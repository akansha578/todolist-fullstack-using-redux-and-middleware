import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsersRequest, addTodo,deleteTodoRequest  }
	from './Redux/action/action';
import './App.css'
const App = ({ users, loading, error, fetchUsers,addTodo,deleteTodoRequest }) => {
  const [newTask, setNewTask] = React.useState(''); 
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim()) { 
      addTodo(newTask); 
      setNewTask('');
    }
  };
  const handleDelete = (id) => {
    deleteTodoRequest(id);
  };
	return (
		<div className="main">
			<h1>Todo List</h1>
			

				{users.map(user => {
					return (
            <div key={user.id} className="todoList">
            <input value={user.task} readOnly />
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>			
          		);
				})}
            <input type="text" value={newTask} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>

		</div>
	);
};

const mapStateToProps = state => {

	return {
		users: state.users || [],
		loading: state.loading,
		error: state.error
	};
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsersRequest()),
  addTodo: (task) => dispatch(addTodo(task)),
  deleteTodoRequest: (id) => dispatch(deleteTodoRequest(id)), 
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
