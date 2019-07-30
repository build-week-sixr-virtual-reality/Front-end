const initialState = {
    user_id: null,
    loggingIn: false,
    error: "",
    errorStatusCode: null,
    isRegistering: false,
    token: localStorage.getItem("token")
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
    //   case FETCH_DATA_START:
    //     return {
    //       ...state,
    //       fetchingNotes: true
    //     };
    //   case FETCH_DATA_SUCCESS:
    //     return {
    //       ...state,
    //       error: "",
    //       errorStatusCode: null,
    //       fetchingNotes: false,
    //       notes: action.payload
    //     };
    //   case ADD_START:
    //     return {
    //       ...state,
    //       addingNote: true
    //     };
    //   case ADD_FAILURE:
    //     return {
    //       ...state,
    //       addingNote: false,
    //       error: action.payload.data.error,
    //       errorStatusCode: action.payload.status
    //     };
    //   case ADD_SUCCESS:
    //     return {
    //       ...state,
    //       addingNote: false,
    //       error: "",
    //       errorStatusCode: null,
    //       notes: [...state.notes, action.payload]
    //     };
    //   case EDIT_START:
    //     return {
    //       ...state,
    //       editingNote: true
    //     };
    //   case EDIT_SUCCESS:
    //     return {
    //       ...state,
    //       editingNote: false,
    //       error: "",
    //       errorStatusCode: null
    //     };
    //   case DELETE_START:
    //     return {
    //       ...state,
    //       deletingNote: true
    //     };
    //   case DELETE_SUCCESS:
    //     return {
    //       ...state,
    //       deletingNote: false,
    //       error: "",
    //       errorStatusCode: null
    //     };
      case USER_UNAUTHORIZED:
        return {
          ...state,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          user_id: action.payload.id
        };
      case REGISTER_USER_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;