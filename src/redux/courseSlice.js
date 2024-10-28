import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  enrolledCourses: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload; 
    },
    enrollInCourse: (state, action) => {
      const courseId = action.payload;
      
      if (!state.enrolledCourses.includes(courseId)) {
        state.enrolledCourses.push(courseId);
      }
    },
  },
});

// Export the actions
export const { setCourses, enrollInCourse } = courseSlice.actions;

// Export the reducer
export default courseSlice.reducer;
