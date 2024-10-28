import React, { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/authSlice"; 
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Loader } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'; // Import your CSS

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Submitting:", formData); 
  
      const response = await axios.post(`${API_URL}/users/login`, formData, {
        withCredentials: true,
      });
  
      console.log("Response:", response.data); 
  
      const { token, user } = response.data.data;
      toast.success("Login successful");
      dispatch(setAuthUser({ token, user })); 
      navigate("/"); 
    } catch (error) {
      console.error("Login error:", error); 
      toast.error(error.response?.data?.message || "Login failed"); 
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container className="container">
      <Toaster />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <h1 className="text-center">Login</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {!loading ? (
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              ) : (
                <Button variant="primary" className="w-100" disabled>
                  <Loader className="animate-spin" />
                </Button>
              )}
            </Form>
            <div className="text-center mt-3">
              Don't have an account? 
              <span className="login" onClick={() => navigate("/signup")}> Signup</span>
            </div>
            <div className="text-center mt-2">
              <span 
                className="login" 
                onClick={() => navigate("/forgetpassword")} 
                style={{ color: 'red' }} // Set text color to red
              >
                Forgot Password?
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
