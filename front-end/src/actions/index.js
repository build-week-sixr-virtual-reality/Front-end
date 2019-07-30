import axios from "axios";
import axiosAuth from "../axiosAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const USER_UNAUTHORIZED = " USER_UNAUTHORIZED";

// export const LOGOUT_START = "LOGOUT_START";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const REGISTER_ADMIN_START = "REGISTER_ADMIN_START";
export const REGISTER_ADMIN_SUCCESS = "REGISTER_ADMIN_SUCCESS";
export const REGISTER_ADMIN_FAILURE = "REGISTER_ADMIN_FAILURE";

export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";

export const ADD_PROJECT_START = "ADD_PROJECT_START";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";

export const EDIT_PROJECT_START = "EDIT_PROJECT_START";
export const EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS";
export const EDIT_PROJECT_FAILURE = "EDIT_PROJECT_FAILURE";

// STRIPE STUFF?

export const PAYMENT_INITIATED = "PAYMENT_INITIATED";
export const PAYMENT_COMPLETED = "PAYMENT_COMPLETED";
export const PAYMENT_PROBLEM = "PAYMENT_PROBLEM";

// export const logout = creds => dispatch => {
//     dispatch({ type: LOGOUT_START });
//     const body
// }

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  const body = `grant_type=password&username=${creds.username}&password=${
    creds.password
  }`;
  return (
    axios
      // check with backend on this if causing errors
      .post("https://ashenphoenix-sixr.herokuapp.com/login", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic c2FmZXNwYWNlLWNsaWVudDpzYWZlc3BhY2Utc2VjcmV0"
        }
      })
      .then(res => {
        localStorage.setItem("token", res.data.access_token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.access_token });
      })
  );
};

export const registerUser = creds => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  return axios
    .post("https://ashenphoenix-sixr.herokuapp.com/createnewuser", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch(e => {
      console.log(`problem with registerUser: ${e}`);
    });
};

export const registerAdmin = creds => dispatch => {
  dispatch({ type: REGISTER_ADMIN_START });
  return axios
    .post("https://ashenphoenix-sixr.herokuapp.com/user", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_ADMIN_SUCCESS, payload: res.data });
    })
    .catch(e => {
      console.log(`problem with registerAdmin: ${e}`);
    });
};

export const addProject = project => dispatch => {
  dispatch({ type: ADD_PROJECT_START });

  return axiosAuth()
    .post("https://ashenphoenix-sixr.herokuapp.com/project/add", project)

    .then(res => {
      dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: ADD_PROJECT_FAILURE, payload: err }));
};
