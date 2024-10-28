import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  videos: [],
  loading: false,
  error: null,
};

// Create an async thunk for adding a video
export const addVideo = createAsyncThunk('video/addVideo', async ({ title, link, courseId }, { getState, rejectWithValue }) => {
  const token = getState().auth.token; // Adjust based on how you store the token in your state

  console.log('Token:', token); // Log the token to check its value

  if (!token) {
    return rejectWithValue('No authentication token found.');
  }

  try {
    const response = await axios.post(`http://localhost:5001/api/videos/${courseId}`, {
      title,
      link,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Ensure response.data contains the new video information
  } catch (error) {
    console.error('Error adding video:', error); // Log the error for further investigation
    return rejectWithValue(error.response.data || 'Failed to add video');
  }
});

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(addVideo.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(addVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.videos.push(action.payload); 
      })
      .addCase(addVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; 
      });
  },
});

export default videoSlice.reducer;
