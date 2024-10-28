import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/videos/${videoId}`);
        setVideo(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching video:', err);
        setError('Failed to load video.'); 
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  if (!video) {
    return <div>No video found.</div>; 
  }

  return (
    <div>
      <h2>{video.title}</h2>
      <video controls>
        <source src={video.link} type="video/mp4" /> {/* Adjust type as necessary */}
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p> {/* Display additional video details if available */}
    </div>
  );
};

export default VideoPlayer;





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const VideoPlayer = () => {
//   const { videoId } = useParams();
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/videos/${videoId}`);
//         setVideo(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching video:', err);
//         setError('Failed to load video.');
//         setLoading(false);
//       }
//     };

//     fetchVideo();
//   }, [videoId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!video) {
//     return <div>No video found.</div>;
//   }

//   // Use the embed URL for YouTube videos
//   const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}`; // Assuming video.youtubeId is set

//   return (
//     <div>
//       <h2>{video.title}</h2>
//       <iframe 
//         width="560" 
//         height="315" 
//         src={embedUrl} 
//         title={video.title} 
//         frameBorder="0" 
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//         allowFullScreen
//       ></iframe>
//       <p>{video.description}</p>
//     </div>
//   );
// };

// export default VideoPlayer;
