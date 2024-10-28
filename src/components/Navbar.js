import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../redux/authSlice"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faSignInAlt, faUserCircle, faInfoCircle } from 
'@fortawesome/free-solid-svg-icons';
import '../components/Footer';
import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); 
  const isAuth = !!user; 

  const handleLogout = () => {
    dispatch(setAuthUser(null)); 
    navigate("/login"); 
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">kidQuest Academy</Link>
        <div className="nav-items">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/footer" className="nav-link">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
          {isAuth ? (
            <>
              <Link to="/profile" className="nav-link">
                <FontAwesomeIcon icon={faUserCircle} /> Profile
              </Link>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </Link>
              <Link to="/login" className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
