import axios from "axios";
import { message } from "antd";

// Constants
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const register = (user) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    await axios.post("/api/users/register", user);
    dispatch(registerSuccess());
    dispatch(logout()); // Add this line to logout the current user
    message.success("Registered successfully. Please login to continue.");
  } catch (error) {
    console.error(error);
    dispatch(registerFailure(error));
    message.error("Failed to register");
  }
};

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("/api/users/login", { username, password });
    const user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(loginSuccess(user));
    message.success("Logged in successfully");
  } catch (error) {
    console.error(error);
    dispatch(loginFailure(error));
    message.error("Failed to login");
  }
};

// Logout action creator
export const logout = () => {
  localStorage.removeItem("user");
  return { type: LOGOUT };
};

// Initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: null,
};

// Reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, isLoading: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
