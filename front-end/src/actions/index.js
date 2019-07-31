// import axios from "axios";
// import axiosAuth from "../axiosAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const USER_UNAUTHORIZED = " USER_UNAUTHORIZED";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const REGISTER_ADMIN_START = "REGISTER_ADMIN_START";
export const REGISTER_ADMIN_SUCCESS = "REGISTER_ADMIN_SUCCESS";
export const REGISTER_ADMIN_FAILURE = "REGISTER_ADMIN_FAILURE";

// export const EDIT_USER_START = "EDIT_USER_START";
// export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
// export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

// export const EDIT_ROLE_START = "EDIT_ROLE_START";
// export const EDIT_ROLE_SUCCESS = "EDIT_ROLE_SUCCESS";
// export const EDIT_ROLE_FAILURE = "EDIT_ROLE_FAILURE";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const FETCH_PROJECT_START = "FETCH_PROJECT_START";
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_PROJECT_START = "ADD_PROJECT_START";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";

export const EDIT_PROJECT_START = "EDIT_PROJECT_START";
export const EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS";
export const EDIT_PROJECT_FAILURE = "EDIT_PROJECT_FAILURE";

// STRIPE STUFF?

// export const PAYMENT_INITIATED = "PAYMENT_INITIATED";
// export const PAYMENT_COMPLETED = "PAYMENT_COMPLETED";
// export const PAYMENT_PROBLEM = "PAYMENT_PROBLEM";

// LOGIN

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
      .catch(err => {
        console.log(`problem logging in: ${err}`);
      })
  );
};

// USER MANAGEMENT

export const registerUser = creds => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  return axios
    .post("https://ashenphoenix-sixr.herokuapp.com/createnewuser", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_USER_FAILURE, payload: err });
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
    .catch(err => {
      dispatch({ type: REGISTER_ADMIN_FAILURE, payload: err });
    });
};

// ADMIN ACTIONS

// export const changeUserRole = creds => {
//   dispatch({ type: EDIT_ROLE_START });
//   return axiosAuth()
//   .put("https://ashenphoenix-sixr.herokuapp.com/user")
// }

export const deleteUser = () => id => {
  dispatch({ type: DELETE_USER_START });
  return axiosAuth()
    .delete(`https://ashenphoenix-sixr.herokuapp.com/users/${id}`)
    .then(res => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
      axiosAuth()
        .get("https://ashenphoenix-sixr.herokuapp.com/users/all")
        .then(res => {
          dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
          if (err.response && err.response.status === 403) {
            dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
          } else {
            dispatch({ type: FETCH_USER_FAILURE, payload: err });
          }
        });
    })
    .catch(err => {
      if (err.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err });
      } else {
        dispatch({ type: DELETE_USER_FAILURE, payload: err });
      }
    });
};

// PROJECT ACTIONS

export const getProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECT_START });
  axiosAuth()
    .get("https://ashenphoenix-sixr.herokuapp.com/project/list")
    .then(res => {
      dispatch({ type: FETCH_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_PROJECT_FAILURE, payload: err });
      }
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

export const editProject = project => {
  dispatch({ type: EDIT_PROJECT_START });
  return axiosAuth()
    .put(
      `https://ashenphoenix.sixr.herokuapp.com/project/${project.projectid}`,
      project
    )
    .then(res => {
      dispatch({ type: EDIT_PROJECT_SUCCESS });
      axiosAuth()
        .get("https://ashenphoenix.sixr.herokuapp.com/project/list")
        .then(res => {
          dispatch({ type: FETCH_PROJECT_SUCCESS, payload: res.data });
        })
        .catch(err => {
          if (err.response && err.response.status === 403) {
            dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
          } else {
            dispatch({ type: FETCH_PROJECT_FAILURE, payload: err });
          }
        });
    });
};

// export const deleteProject = id => dispatch => {
//   dispatch({ type: DELETE_PROJECT_START });
//   return axiosAuth()
//     .delete(`https://ashenphoenix.sixr.herokuapp.com/project/${id}`)
//     .then(res => {
//       dispatch({ type: DELETE_PROJECT_SUCCESS, payload: res.data });
//       axiosAuth()
//         .get("https://safespaceapp.herokuapp.com/notes/mynotes")
//         .then(res => {
//           dispatch({ type: FETCH_PROJECT_SUCCESS, payload: res.data });
//         })
//         .catch(err => {
//           if (err.response && err.response.status === 403) {
//             dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
//           } else {
//             dispatch({ type: FETCH_PROJECT_FAILURE, payload: err });
//           }
//         });
//     })
//     .catch(err => {
//       if (err.status === 403) {
//         dispatch({ type: USER_UNAUTHORIZED, payload: err });
//       } else {
//         dispatch({ type: DELETE_FAILURE, payload: err });
//       }
//     });

// };
