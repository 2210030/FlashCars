import axios from "axios";
import {message} from 'antd'

export const setLoading = (loading) => {
  return { type: "LOADING", payload: loading };
};

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post("/api/users/login", reqObj);
    const user = response.data;

    if (user.blocked) {
      throw new Error("BlockedUser");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      message.success("Login success");
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    }
  } catch (error) {
    console.log(error);
    if (error.message === "BlockedUser") {
      message.error("Login failed. Your account is blocked.");
    } else {
      message.error("Something went wrong");
    }
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};

export const forgetPassword = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post("/api/users/reset-password", reqObj);
    message.success("Password Changed Successfully");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
  
    try {
      const response = await axios.post("/api/users/register", reqObj);
      localStorage.setItem("user", JSON.stringify(response.data));
      message.success("Registration successfull");
  
      // Add first name and last name to user object
      const user = {
        ...response.data,
        firstName: reqObj.firstName,
        lastName: reqObj.lastName,
      };
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      dispatch({ type: "LOADING", payload: false });
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
      dispatch({ type: "LOADING", payload: false });
    }
  };
  
  
export const updateUser = (userId, reqObj) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
  
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.put(
        `/api/users/${userId}`,
        reqObj,
        config
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      message.success("Profile updated successfully!");
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: response.data });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
      dispatch({ type: "UPDATE_USER_FAILURE", payload: error });
      dispatch({ type: "LOADING", payload: false });
    }
  };

  export const blockUser = (userId) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await axios.post("/api/users/block-user", { userId });
      message.success("User blocked successfully");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        message.error(error.response.data.message);
      } else {
        message.error("Failed to block user");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  export const unblockUser = (userId) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
  
    try {
      const response = await axios.post("/api/users/unblock-user", { userId });
      const updatedUser = response.data;
      
      if (updatedUser) {
        message.success("User unblocked successfully");
        dispatch({ type: "UPDATE_USER_SUCCESS", payload: updatedUser });
        dispatch({ type: "LOADING", payload: false });
      } else {
        message.error("Failed to unblock user");
        dispatch({ type: "LOADING", payload: false });
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to unblock user");
      dispatch({ type: "LOADING", payload: false });
    }
  };
  
  
  