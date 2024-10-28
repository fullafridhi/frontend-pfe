import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVideo } from '../redux/videoSlice';

const AddVideoForm = ({ courseId }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.videos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVideo({ title, link, courseId }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Video Title"
        required
      />
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Video Link"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Video'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default AddVideoForm;
