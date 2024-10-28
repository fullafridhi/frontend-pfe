import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoList = () => {
  const videos = useSelector((state) => state.videos.videos);
  console.log('Videos:', videos); // Log the entire videos array

  return (
    <div>
      <h2>Video List</h2>
      {videos.length > 0 ? (
        videos.map((video) => {
          console.log('Rendering video:', video); // Log each video object
          return (
            <div key={video.id}>
              <h3>{video.title}</h3>
              <Link to={`/watch/${video.id}`}>Watch Video</Link>
            </div>
          );
        })
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
};


export default VideoList;
