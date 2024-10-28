// TeacherCard.js
import React from 'react';
import './teacherCard.css';

const TeacherCard = ({ name, role, profilePic, evaluation }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="teacher-card">
      <img src={profilePic} alt={name} className="profile-pic" />
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="evaluation">
        {renderStars(Math.round(evaluation))}
      </div>
    </div>
  );
};

export default TeacherCard;
