import React from "react"; // These components imports various dependancies from react etc.,.
import { Menu, Dropdown, Button, Space, Typography, Row, Col } from "antd";
import { Link, Redirect } from "react-router-dom";
import { UserOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const menu = (
    <Menu style={{ backgroundColor: "black" }}>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/feedback">Feedback</a>
      </Menu.Item>
      {user?.isAdmin && (
        <Menu.Item>
          <a href="/admin">Admin Pannel</a>
        </Menu.Item>
      )}
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "Turquoise" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  if (user) {
    return (
      <div>
        <div className="header bs1" style={{ backgroundColor: "black", position: "relative" }}>
          <div className="car-animation">
            <img src="https://www.shutterstock.com/image-vector/hatchback-car-simple-flat-icon-600w-322029812.jpg" alt="car" />
          </div>
          <Row gutter={16} justify="center">
            <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
                <h1>
                  <b>
                    <Link to="/" style={{ color: "Turquoise" }}>
                      FlashCars
                    </Link>
                  </b>
                </h1>

                <Dropdown overlay={menu} placement="bottomCenter">
                  <Button
                    title={user.username}
                    style={{
                      border: "none",
                      background: "transparent",
                      padding: "4px 8px",
                    }}
                  >
                    <UserOutlined style={{ color: "Turquoise" }} />
                  </Button>
                </Dropdown>
              </div>
            </Col>
          </Row>
          <div
            className="header-border"
            style={{
              position: "absolute",
              bottom: "-1px",
              left: 0,
              width: "100%",
              height: "3px",
              backgroundColor: "Turquoise",
              animation: "border 2s infinite",
            }}
          />
        </div>
        <div className="content" style={{ backgroundColor: "black" }}>
          {props.children}
        </div>

        <div className="footer" style={{ backgroundColor: "black", padding: "40px" }}>
          <hr style={{ borderColor: "Turquoise" }} />

          <Row gutter={32} justify="center">
            <Col lg={4} sm={12} xs={24}>
              <Typography.Title level={4} style={{ color: "Turquoise" }}>
                About
              </Typography.Title>
              <Typography.Paragraph style={{ color: "Turquoise" }}>
                FlashCars is a leading car rental service providing top-notch cars for all your travel needs.
              </Typography.Paragraph>
            </Col>
            <Col lg={4} sm={12} xs={24}>
              <Typography.Title level={4} style={{ color: "Turquoise" }}>
                Quick Links
              </Typography.Title>
              <ul style={{ listStyle: "none", paddingLeft: 0, color: "white" }}>
                <li>
                  <Link to="/about" style={{ color: "white" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" style={{ color: "white" }}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" style={{ color: "white" }}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/terms" style={{ color: "white" }}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" style={{ color: "white" }}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} sm={12} xs={24}>
              <Typography.Title level={4} style={{ color: "Turquoise" }}>
                Locations
              </Typography.Title>
              <Typography.Paragraph style={{ color: "Turquoise" }}>
                Montreal
              </Typography.Paragraph>
            </Col>
            <Col lg={4} sm={12} xs={24}>
              <Typography.Title level={4} style={{ color: "Turquoise" }}>
                Social Media
              </Typography.Title>
              <Space>
                <a href="https://facebook.com" style={{ color: "Turquoise" }}>
                  <FacebookOutlined />
                </a>
                <a href="https://twitter.com" style={{ color: "Turquoise" }}>
                  <TwitterOutlined />
                </a>
                <a href="https://instagram.com" style={{ color: "Turquoise" }}>
                  <InstagramOutlined />
                </a>
              </Space>
            </Col>
            <Col lg={4} sm={12} xs={24}>
              <Typography.Title level={4} style={{ color: "Turquoise" }}>
                Newsletter
              </Typography.Title>
              <Typography.Paragraph style={{ color: "Turquoise" }}>
                Subscribe to our newsletter for the latest updates and promotions.
              </Typography.Paragraph>
              {/* Add your newsletter subscription form here */}
            </Col>
          </Row>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

export default DefaultLayout;