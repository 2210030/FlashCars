import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { forgetPassword } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { message } from "antd";
import DefaultLayout from "../components/DefaultLayout";

function ForgotPassword() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ username: "", password: "" });

  const onFinish = (val) => {
    console.log("Submit val:", val);
    if (values.username) resetPassword(val);
    else checkEmail(val);
  };

  const checkEmail = async (reqObj) => {
    try {
      const response = await axios.post("/api/users/check-email", reqObj);
      console.log("response ----------> ", response.data);
      if (!response.data) {
        console.log("here");
        message.error("Email does not exists.");
      } else {
        setValues({ ...values, username: reqObj.email });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetPassword = async (reqObj) => {
    if (reqObj.password === reqObj.confirmPassword) {
      dispatch(forgetPassword({ ...values, password: reqObj.password }));
    } else message.error("Passwords doesn't match");
  };

  return (
    <Row justify="end" className="mt-5">
    <Col lg={8} md={12} sm={18} xs={24}>
    <div
      style={{
        backgroundColor: "Turquoise",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        height: "100vh"
      }}
    >
      <h3 style = {{color: "Black"}}>Forgot Password</h3>
      <Form onFinish={onFinish}>
        {values.username ? (
          <div>
            <Form.Item
              name="password"
              label="Password"
              style={{ color: "white" }}
            >
              <Input placeholder="Enter your new password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              style={{ color: "white" }}
            >
              <Input placeholder="Re-enter your new password" />
            </Form.Item>
          </div>
        ) : (
          <Form.Item
            name="email"
            label="Email"
            style={{ color: "white" }}
            rules={[
              {
                type: "email",
                message: "Please enter a valid email!",
              },
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {values.username ? "Reset Password" : " Verify Email"}
          </Button>
        </Form.Item>
      </Form>
    </div>
    </Col>
      </Row>
  );
}

export default ForgotPassword;