import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { deleteCar, getAllCars } from "../redux/actions/carsActions";
import { Col, Row, Divider, DatePicker, Checkbox, Edit, Modal, Switch } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import { blockUser, unblockUser } from "../redux/actions/userActions";

const { RangePicker } = DatePicker;

function AdminHome() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleToggleUserStatus = async (userId, blocked) => {
  try {
    const updatedBlockedStatus = !blocked;
    const updatedUsers = users.map((user) => {
      if (user._id === userId) {
        return {
          ...user,
          blocked: updatedBlockedStatus,
        };
      }
      return user;
    });
    setUsers(updatedUsers);

    if (updatedBlockedStatus) {
      await dispatch(blockUser(userId));
      message.success("User blocked successfully");
    } else {
      await dispatch(unblockUser(userId));
      message.success("User unblocked successfully");
    }
  } catch (error) {
    console.log(error);
    message.error("Failed to toggle user status");
    // Reset the user's blocked status in case of an error
    const resetUsers = users.map((user) => {
      if (user._id === userId) {
        return {
          ...user,
          blocked,
        };
      }
      return user;
    });
    setUsers(resetUsers);
  }
};


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Function to fetch the list of users
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
        // Handle error
      }
    };
  
    // Call the fetchUsers function
    fetchUsers();
  }, []);

  return (
    <DefaultLayout>
      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-1 mr-2" style={{ color: "Turquoise", fontWeight: "bolder" }}>
              Admin Panel
            </h3>
            <button className="btn1">
              <a href="/addcar">ADD CAR</a>
            </button>
            <button className="btn1" onClick={showModal}>
              Block/Unblock Users
            </button>
          </div>
        </Col>
      </Row>

      {loading && <Spinner />}

      <Row justify="center" gutter={16}>
        {totalCars.map((car) => {
          return (
            <Col lg={7} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" />

                <div className="car-content d-flex align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{car.name}</p>
                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                  </div>

                  <div className="mr-4">
                    <Link to={`/editcar/${car._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "pointer" }}
                      />
                    </Link>

                    <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={() => {
                        dispatch(deleteCar({ carid: car._id }));
                      }}
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
                    </Popconfirm>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>

      {/* User Block/Unblock Modal */}
      <Modal
        title="Block/Unblock Users"
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        destroyOnClose={true}
        afterClose={() => {
          setUsers([]); // Clear the users array when the modal is closed
        }}
      >
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-item">
              <span>{user.username}</span>
              <Switch
  checked={!user.blocked}
  onChange={checked => handleToggleUserStatus(user._id, user.blocked)}
/>

            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </Modal>
    </DefaultLayout>
  );
}

export default AdminHome;
