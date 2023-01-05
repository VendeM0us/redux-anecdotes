import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    removeNotification() {
      return null;
    },
  },
});

export const { setNotification, removeNotification } = notificationSlice.actions;

export const handleNotification = (text, duration) => async (dispatch) => {
  dispatch(setNotification(text));

  setTimeout(() => {
    dispatch(removeNotification());
  }, duration * 1000);
};

export default notificationSlice.reducer;
