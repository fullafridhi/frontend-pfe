import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCourses } from "../redux/courseSlice";
import ImageSlider from "../components/ImageSlider"; // Import the ImageSlider
import CourseList from './../components/CourseList';
import TeacherList from '../components/TeacherList'; 
import Footer from '../components/Footer'; // Import the Footer
import './home.css';

const Home = () => {
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API_URL}/courses`);
        dispatch(setCourses(response.data.courses));
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [API_URL, dispatch]);

  return (
    <div className="home-container">
      <ImageSlider /> {/* Add the ImageSlider here */}
      <h4>Let's learn!</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="course-list">
          {courses.length === 0 ? (
            <p>No courses available at the moment.</p>
          ) : (
            <CourseList />
          )}
        </div>
      )}

 
      <h4>
        Our teachers embody a variety of essential roles in our learning. The mentor offers support and guidance, fostering self-confidence. The innovator, with creative methods, makes learning engaging and relevant. The disciplinarian, while firm, establishes clear rules to encourage respect and responsibility. The encourager motivates students with a positive attitude, celebrating every success.
      </h4>
      <TeacherList />

      
      <Footer />
    </div>
  );
};

export default Home;
