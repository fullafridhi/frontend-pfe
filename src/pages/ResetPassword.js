import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { Loader } from "lucide-react";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import { setAuthUser } from "../redux/authSlice"; 

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    if (!otp || !email || !password || !passwordConfirm) return;
    setLoading(true);
    try {
      const data = { email, otp, password, passwordConfirm };
      const response = await axios.post(
        `${API_URL}/users/reset-password`,
        data,
        { withCredentials: true }
      );
      dispatch(setAuthUser(response.data.data.user));
      toast.success("Password reset successful!");
      navigate("/login"); 
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred"); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Toaster />
      <div style={{ 
        width: '400px', 
        padding: '20px', 
        borderRadius: '10px', 
        backgroundColor: '#fff', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        textAlign: 'center' 
      }}>
        <h3 style={{ fontSize: '18px', color: '#1f2937', marginBottom: '16px', fontWeight: '500' }}>
          Reset Your Password
        </h3>
        <input
          type="number"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', backgroundColor: '#d1d5db', border: 'none' }}
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', backgroundColor: '#d1d5db', border: 'none' }}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', backgroundColor: '#d1d5db', border: 'none' }}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '24px' }}>
          {!loading ? (
            <button onClick={handleSubmit} style={{ 
              padding: '10px 20px', 
              borderRadius: '5px', 
              backgroundColor: '#3b82f6', 
              color: '#ffffff', 
              border: 'none', 
              cursor: 'pointer' 
            }}>
              Change password
            </button>
          ) : (
            <button disabled style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#ccc' }}>
              <Loader className="animate-spin" />
            </button>
          )}
          <button
            onClick={() => navigate("/forgetpassword")}
            style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#f0f0f0', border: 'none', cursor: 'pointer' }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
