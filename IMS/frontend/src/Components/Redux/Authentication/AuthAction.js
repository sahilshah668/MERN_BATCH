import axios from "../../utils/axios";
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
export const AUTH_ACTIION_TYPES = {
  ON_REGISTER_SUCCESS: "AUTH/ON_REGISTER_SUCCESS",
  ON_REGISTER_FAILURE: "AUTH/ON_REGISTER_FAILURE",
  ON_LOGIN_SUCCESS: "AUTH/ON_LOGIN_SUCCESS",
  ON_LOGIN_FAILURE: "AUTH/ON_LOGIN_FAILURE",
};

export const onRegisterSuccess = () => {
  return {
    type: AUTH_ACTIION_TYPES.ON_REGISTER_SUCCESS,
  };
};

export const onRegisterFailure = (msg) => {
  return {
    type: AUTH_ACTIION_TYPES.ON_REGISTER_FAILURE,
    payload: msg,
  };
};

export const onLoginSuccess = (user) => {
  return {
    type: AUTH_ACTIION_TYPES.ON_LOGIN_SUCCESS,
    payload: user,
  };
};

export const onLoginFailure = (msg) => {
  return {
    type: AUTH_ACTIION_TYPES.ON_LOGIN_FAILURE,
    payload: msg,
  };
};

export const onRegister = (userData, history) => {
  return (dispatch) => {
    axios.post(`http://localhost:5000/register`, userData).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        history.push("/");
      } else {
        console.log(res.status);
      }
    });
  };
};

export const onLogin = (userData, history) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/login", userData)
      .then((res) => {
        if (res.status === 200) {
          const {token} = res.data
          setAuthToken(token)
          localStorage.setItem('jwtToken',token)
          const decoded = jwt_decode(token)
          // console.log(decoded)
          dispatch(onLoginSuccess(decoded))
          history.push('/dashboard')

        } else {
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
