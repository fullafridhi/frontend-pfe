import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { enrollInCourse } from '../redux/courseSlice';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './courseCard.css'; // Make sure this file is imported

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Defensive check for the course
  if (!course) {
    return <div>Loading course data...</div>;
  }

  const handleEnroll = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      await dispatch(enrollInCourse(course.id));
      navigate('/payment');
    } catch (error) {
      console.error("Enrollment failed:", error);
      setErrorMessage("Enrollment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddVideo = () => {
    navigate(`/add-video/${course.id}`);
  }
  
  return (
    <div className="course-card">
      <img src={course.img || 'path/to/default/image.jpg'} alt={course.title} />
      <h5 className="course-title">{course.title}</h5>
      <p className="course-description">{course.description}</p>
      <p className="course-duration"><strong>Duration:</strong> {course.duration} hours</p>
      <p className="course-category"> <stron> <strong>Category:</strong></stron> {course.category}</p>
      <p className="course-teacher"><strong>Teacher: </strong>{course.teacher}</p>
      <p className="course-price"> <strong>Price: </strong>{course.price} Dt</p>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button className="enroll-button" onClick={handleEnroll} disabled={loading}>
        {loading ? 'Enrolling...' : 'Enroll Now'}
      </button>
      <button className="add-video-button" onClick={handleAddVideo}>
        Add Video
      </button>
      <div className="videos-list">
        {course.videos && course.videos.length > 0 ? (
          course.videos.map((video) => (
            <div key={video.id} className="video-item">
              <h6>{video.title}</h6>
              <button onClick={() => navigate(`/videos/${video.id}`)}>Watch Video</button>
            </div>
          ))
        ) : (
          <p className="no-videos-message">No videos available for this course.</p>
        )}
      </div>
    </div>
  )};
  

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    videos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default CourseCard;
