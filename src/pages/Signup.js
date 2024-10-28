import React, { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/authSlice"; 
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Loader } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { username, email, password, passwordConfirm, role } = formData;
    if (!username || !email || !password || !passwordConfirm || !role) {
      toast.error("All fields are required.");
      return false;
    }
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/users/signup`, formData, {
        withCredentials: true,
      });

      console.log(response); // Log the response for debugging
      const user = response.data.data.user;
      toast.success("Signup successful");
      dispatch(setAuthUser(user));
      navigate("/verify");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Signup failed");
      } else {
        toast.error("An error occurred, please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="container mt-5">
      <Toaster />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <h1 className="text-center">Signup</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formUsername">
                <Form.Label className="label-spacing">Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="label-spacing">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="label-spacing">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPasswordConfirm">
                <Form.Label className="label-spacing">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formRole">
                <Form.Label className="label-spacing">Role</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  placeholder="Student or Teacher"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                {loading ? <Loader className="animate-spin" /> : "Submit"}
              </Button>
            </Form>

            <div className="text-center mt-3">
              Already have an account? 
              <span className="login" onClick={() => navigate("/login")}> Login</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
