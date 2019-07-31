import {
  USER_UNAUTHORIZED,
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_START,
  REGISTER_ADMIN_START,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAILURE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  FETCH_PROJECTS_START,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  EDIT_PROJECT_START,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
  PAYMENT_INITIATED,
  PAYMENT_COMPLETED,
  PAYMENT_PROBLEM
} from "../actions";

const initialState = {
  projects: [],
  user_id: null,
  loggingIn: false,
  error: "",
  errorStatusCode: null,
  isRegistering: false,
  fetchingProjects: false,
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
    case FETCH_PROJECT_START:
      return {
        ...state,
        fetchingProjects: true
      };

    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingProjects: false,
        projects: action.payload
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        fetchingProjects: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };

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
        errorStatusCode: action.payload.status
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
