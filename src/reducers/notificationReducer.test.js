import deepFreeze from 'deep-freeze';
import notificationReducer from './notificationReducer';

describe('notification reducer', () => {
  test('should change notification message', () => {
    const state = 'old notification';
    const action = {
      type: 'notification/setNotification',
      payload: 'new notification',
    };

    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(newState).toBe('new notification');
  });

  test('should remove notification', () => {
    const state = 'notification';
    const action = {
      type: 'notification/removeNotification',
    };

    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(newState).toBe(null);
  });
});
