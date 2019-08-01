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
  // EDIT_USER_START,
  // EDIT_USER_SUCCESS,
  // EDIT_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  FETCH_PROJECT_START,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  // EDIT_PROJECT_START,
  // EDIT_PROJECT_SUCCESS,
  // EDIT_PROJECT_FAILURE,
  // PAYMENT_INITIATED,
  // PAYMENT_COMPLETED,
  // PAYMENT_PROBLEM,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../actions";

const initialState = {
  projects: [],
  users: [],
  admins: [],
  // user_id: null,
  fetchingUsers: false,
  loggingIn: false,
  error: "",
  errorStatusCode: null,
  isRegistering: false,
  fetchingProjects: false,
  editingProject: false,
  deletingUser: false,
  token: localStorage.getItem("token")
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
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
    //PROJECTS
    // --FETCHING

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
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        fetchingProjects: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };

    // --ADDING

    case ADD_PROJECT_START:
      return {
        ...state,
        addingProject: true
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        addingProject: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        addingProject: false,
        error: "",
        errorStatusCode: null,
        projects: [...state.projects, action.payload]
      };
    // --EDITING

    // case EDIT_PROJECT_START:
    //   return {
    //     ...state,
    //     editingProject: true
    //   };
    // case EDIT_PROJECT_SUCCESS:
    //   return {
    //     ...state,
    //     editingProject: false,
    //     error: "",
    //     errorStatusCode: null
    //   };
    // case EDIT_PROJECT_FAILURE:
    //   return {
    //     ...state,
    //     editingProject: false,
    //     error: action.payload.data.error,
    //     errorStatusCode: action.payload.status
    //   };

    // USER CONTROL - ADMIN
    // --FETCH USERS

    case FETCH_USERS_START:
      return {
        ...state,
        fetchingUsers: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingUsers: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };

    // --DELETING USERS

    case DELETE_USER_START:
      return {
        ...state,
        deletingUser: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deletingUser: false,
        error: "",
        errorStatusCode: null
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        deletingUser: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };

    // CREATE ADMIN
    case REGISTER_ADMIN_START:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_ADMIN_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        error: "",
        errorStatusCode: null,
        admins: [...state.admins, action.payload]
      };
    case REGISTER_ADMIN_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };

    // INVALID CREDS

    case USER_UNAUTHORIZED:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };

    //REGISTERING NEW USERS
    case REGISTER_USER_START:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        error: "",
        errorStatusCode: null,
        users: [...state.users, action.payload]
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };
    default:
      return state;
  }
};

export default rootReducer;
