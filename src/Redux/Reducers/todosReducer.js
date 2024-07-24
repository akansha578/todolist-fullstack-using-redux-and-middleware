
const initialState = {
	users: [],
	loading: false,
	error: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        case 'ADD_TODO_FAILURE':
            return {
                ...state,
                error: action.payload
            };
		case 'FETCH_USERS_REQUEST':
			return { ...state, loading: true };
		case 'FETCH_USERS_SUCCESS':
			return {
				...state, loading: false,
				users: action.payload, error: null
			};
		case 'FETCH_USERS_FAILURE':
			return {
				...state, loading: false,
				error: action.payload
			};
      case 'DELETE_TODO_REQUEST':
      return { ...state, loading: true }; 
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.id), 
      };
    case 'DELETE_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
		default:
			return state;
	}
};

export default userReducer;
