// src/components/Feedback.js
import React from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';

const Feedback = () => {
  const onFinish = (values) => {
    // Handle form submission here (e.g., send feedback data to your server)
    console.log('Received values of form: ', values);
    message.success('Feedback submitted successfully!');
  };

  return (
    <Row justify="end">
      <Col lg={8} md={24} sm={24} xs={24} className="p-2">
        <div style={{ backgroundColor: "Black", padding: '20px' }}>
          <h2 style={{color: "Turquoise"}}>Feedback</h2>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label={<span style={{ color: "Turquoise" }}>Name</span>}
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label={<span style={{ color: "Turquoise" }}>Email</span>}
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="feedback"
              label={<span style={{ color: "Turquoise" }}>Feedback</span>}
              rules={[
                { required: true, message: 'Please input your feedback!' },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Feedback;
