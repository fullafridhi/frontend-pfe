import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: '',
  },
  reducers: {
    setAuthUser: (state, action) => {
      console.log('Dispatching setAuthUser with payload:', action.payload);
      if (action.payload) {
        state.user = action.payload.user; // Adjust based on your user object structure
        state.token = action.payload.token; // Assuming token is also in the payload
      } else {
        state.user = null; // Clear user state
        state.token = ''; // Clear token state
      }
    },
    logout: (state) => {
      state.user = null; // Clear user state
      state.token = ''; // Clear token state
    },
  },
});

export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
