import React from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VideoPlayer from './VideoPlayer';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = useSelector(state =>
    state.courses.courses.find(c => c.id === courseId)
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div>
        {course.videos && course.videos.map(video => (
          <div key={video.id}>
            <h6>{video.title}</h6>
            <button onClick={() => navigate(`/video/${video.id}`)}>Watch Video</button>
          </div>
        ))}
      </div>

      {/* Set up nested routing for videos */}
      <Routes>
        <Route path="video/:videoId" element={<VideoPlayer videos={course.videos} />} />
      </Routes>
    </div>
  );
};

export default CourseDetail;
