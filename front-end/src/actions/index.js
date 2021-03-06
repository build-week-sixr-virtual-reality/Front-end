import axios from "axios";
import axiosAuth from "../axiosAuth";
import auth from "axios-oauth-client";

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

export const EDIT_ROLE_START = "EDIT_ROLE_START";
export const EDIT_ROLE_SUCCESS = "EDIT_ROLE_SUCCESS";
export const EDIT_ROLE_FAILURE = "EDIT_ROLE_FAILURE";


// ADDED BY SETH
export const ENABLE_MENTOR_START = "ENABLE_MENTOR_START";
export const ENABLE_MENTOR_SUCCESS = "ENABLE_MENTOR_SUCCESS";
export const ENABLE_MENTOR_FAILURE = "ENABLE_MENTOR_FAILURE";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const FETCH_PROJECT_START = "FETCH_PROJECT_START";
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";

export const FETCH_MENTORS_START = "FETCH_MENTORS_START";
export const FETCH_MENTORS_SUCCESS = "FETCH_MENTORS_SUCCESS";
export const FETCH_MENTORS_FAILURE = "FETCH_MENTORS_FAILURE";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_PROJECT_START = "ADD_PROJECT_START";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";

export const DELETE_PROJECT_START = "DELETE_PROJECT_START";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAILURE = "DELETE_PROJECT_FAILURE";

// export const EDIT_PROJECT_START = "EDIT_PROJECT_START";
// export const EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS";
// export const EDIT_PROJECT_FAILURE = "EDIT_PROJECT_FAILURE";

// STRIPE STUFF?

// export const PAYMENT_INITIATED = "PAYMENT_INITIATED";
// export const PAYMENT_COMPLETED = "PAYMENT_COMPLETED";
// export const PAYMENT_PROBLEM = "PAYMENT_PROBLEM";

// LOGIN

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  const body = {
    grant_type: "password",
    password: creds.password,
    username: creds.username,
    client_id: "lambda-client",
    client_secret: "lambda-secret",


  }
 
   const getAuth =  auth.client(
      axios.create(),
      { 
        url:"https://ashenphoenix-sixr.herokuapp.com/login", 
        grant_type: "password",
        password: creds.password,
        username: creds.username,
        client_id: "lambda-client",
        client_secret: "lambda-secret",
        
        scope: ""
      }
    )
    // const test = await getAuth();
    // console.log(test);
    return (
     
    axios
      // check with backend on this if causing errors
      .post(`https://ashenphoenix-sixr.herokuapp.com/login?grant_type=password&client_id=${body.client_id}&client_secret=${body.client_secret}&password=${creds.password}&username=${creds.username}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa('lambda-client-g:lambda-secret-g')}`,
          accept: "application/json"
        }
        

      })
      .then(res => {
        console.log("login-test", res)
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

export const getMentors = () => dispatch => {
  dispatch({ type: FETCH_MENTORS_START });
  return axios
  .get("https://ashenphoenix-sixr.herokuapp.com/")
}

export const enableMentor = type => dispatch => {
  dispatch({ type: ENABLE_MENTOR_START });
  return axios
    .put(`https://ashenphoenix-sixr.herokuapp.com/users/type/${type}`)
    .then(res => {
      dispatch({ type: ENABLE_MENTOR_SUCCESS, payload: res.data });
    })
    .catch(err => {
    dispatch({ type: ENABLE_MENTOR_FAILURE, payload: `Unable to change mentor status`, err})
  })
}

export const registerAdmin = creds => dispatch => {
  dispatch({ type: REGISTER_ADMIN_START });
  return axios
    .post("https://ashenphoenix-sixr.herokuapp.com/users", creds)
    .then(res => {
      dispatch({ type: REGISTER_ADMIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_ADMIN_FAILURE, payload: `Unable to register as admin`, err });
    });
};

// ADMIN ACTIONS

export const changeUserRole = (auth, id, creds) => dispatch => {
  dispatch({ type: EDIT_ROLE_START });
  return axiosAuth()
    .put(
      `https://ashenphoenix-sixr.herokuapp.com/user/grant/${auth}/${id}`,
      creds
    )
    .then(res => {
      dispatch({ type: EDIT_ROLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === 403) {
        dispatch({
          type: USER_UNAUTHORIZED,
          payload: `You're unauthorized`,
          err
        });
      } else {
        dispatch({ type: EDIT_ROLE_FAILURE, payload: `Internal Error`, err });
      }
    });
};

export const deleteUser = (id, creds) => dispatch => {
  dispatch({ type: DELETE_USER_START });
  return axiosAuth()
    .delete(`https://ashenphoenix-sixr.herokuapp.com/users/${id}`, creds)
    .then(res => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
      axiosAuth()
        .get("https://ashenphoenix-sixr.herokuapp.com/users/all")
        .then(res => {
          dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
          if (err.response && err.response.status === 403) {
            dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
          } else {
            dispatch({ type: FETCH_USERS_FAILURE, payload: err });
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
    .get("https://ashenphoenix-sixr.herokuapp.com/project/owned")
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

// export const editProject = project => {
//   dispatch({ type: EDIT_PROJECT_START });
//   return axiosAuth()
//     .put(
//       `https://ashenphoenix.sixr.herokuapp.com/project/${project}`,
//       project
//     )
//     .then(res => {
//       dispatch({ type: EDIT_PROJECT_SUCCESS });
//       axiosAuth()
//         .get("https://ashenphoenix.sixr.herokuapp.com/project/list")
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
//     });
// };

export const deleteProject = id => dispatch => {
  dispatch({ type: DELETE_PROJECT_START });
  return axiosAuth()
    .delete(`https://ashenphoenix.sixr.herokuapp.com/project/delete/${id}`)
    .then(res => {
      dispatch({ type: DELETE_PROJECT_SUCCESS, payload: res.data });
      axiosAuth()
        .get("https://ashenphoenix.sixr.herokuapp.com/project/owned")
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
    })
    .catch(err => {
      if (err.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err });
      } else {
        dispatch({ type: DELETE_PROJECT_FAILURE, payload: err });
      }
    });
};
