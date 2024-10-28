import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVideo } from '../redux/videoSlice'; 
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addVideo.css'; // Import the new CSS file

const AddVideo = () => {
  const { courseId } = useParams(); 
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.videos.loading); // Get loading state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(addVideo({ title, link, courseId }));
      if (addVideo.fulfilled.match(resultAction)) {
        toast.success('Video added successfully!'); 
        setTitle(''); // Reset the title
        setLink('');  // Reset the link
        navigate(`/course/${courseId}`); // Redirect to the course page
      } else {
        toast.error('Failed to add video: ' + (resultAction.payload || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding video:', error);
      toast.error('Failed to add video: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div className="add-video"> 
      <ToastContainer /> 
      <h2>Add Video for Course ID: {courseId}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Video Title:
          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Video Link:
          <input
            type="text"
            placeholder="Video Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>Submit</button>
      </form>
    </div>
  );
};

export default AddVideo;
