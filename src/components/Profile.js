import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '../redux/authSlice'; 
import './profile.css'; 

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState(user?.email || '');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email || '');
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const handleLogout = () => {
    dispatch(setAuthUser(null)); // Correctly clear user data
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    console.log("Changing email to:", email);
    // Handle email change logic here (e.g., API call)
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Changing password to:", newPassword);
    // Handle password change logic here (e.g., API call)
  };

  return (
    <div className="profile-container">
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p> 

      <h4>Change your email</h4>
      <form onSubmit={handleEmailChange} className="profile-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="New Email"
          required
          className="profile-input"
        />
        <button type="submit" className="profile-button">Change Email</button>
      </form>

      <h4>Change your password</h4>
      <form onSubmit={handlePasswordChange} className="profile-form">
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
          className="profile-input"
        />
        <button type="submit" className="profile-button">Change Password</button>
      </form>

      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Profile;
