import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Loader } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL; 

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/users/forget-password`, { email }, { withCredentials: true });
      toast.success('Reset code sent to your email');
      navigate(`/resetpassword?email=${encodeURIComponent(email)}`); 
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          Enter your email to get a code for resetting your password.
        </h3>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ 
            width: '100%', 
            marginBottom: '16px', 
            borderRadius: '8px', 
            backgroundColor: '#d1d5db', 
            padding: '12px', 
            border: 'none' 
          }}
          required
        />
        {!loading ? (
          <button onClick={handleSubmit} style={{ 
            padding: '10px 20px', 
            borderRadius: '5px', 
            backgroundColor: '#3b82f6', 
            color: '#ffffff', 
            border: 'none', 
            cursor: 'pointer' 
          }}>
            Submit
          </button>
        ) : (
          <button disabled style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#ccc' }}>
            <Loader className='animate-spin' />
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
