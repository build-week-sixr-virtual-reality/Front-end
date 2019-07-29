import axios from "axios";
import axiosAuth from "../axiosAuth";


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const USER_UNAUTHORIZED = " USER_UNAUTHORIZED";

// export const LOGOUT_START = "LOGOUT_START";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";


export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// export const logout = creds => dispatch => {
//     dispatch({ type: LOGOUT_START });
//     const body
// }

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    console.log(creds);
    const body = `grant_type=password&username=${creds.username}&password=${
      creds.password
    }`;
    return axios
        // check with backend on this if causing errors
      .post("https://ashenphoenix-sixr.herokuapp.com/login", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic c2FmZXNwYWNlLWNsaWVudDpzYWZlc3BhY2Utc2VjcmV0"
        }
      })
      .then(res => {
        console.log("random", res.data);
        localStorage.setItem("token", res.data.access_token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.access_token });
      });
  };
  
  export const registerUser = creds => dispatch => {
    dispatch({ type: REGISTER_USER });
    return axios
      .post("https://ashenphoenix-sixr.herokuapp.com/createnewuser", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  };
  