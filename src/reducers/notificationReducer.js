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

let timeoutID;
export const handleNotification = (text, duration) => async (dispatch) => {
  clearTimeout(timeoutID);
  dispatch(setNotification(text));

  timeoutID = setTimeout(() => {
    dispatch(removeNotification());
  }, duration * 1000);
};

export default notificationSlice.reducer;
