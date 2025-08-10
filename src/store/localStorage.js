const STORAGE_KEY = 'employee-app-state';

export const localStorageUtils = {
  saveState: (state) => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STORAGE_KEY, serializedState);
      } catch (error) {
        console.error('Error saving state to localStorage:', error);
      }
    }
  },

  loadState: () => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if (serializedState === null) {
          return undefined;
        }
        const state = JSON.parse(serializedState);
        return state;
      } catch (error) {
        return undefined;
      }
    }
    return undefined;
  },

  clearState: () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (error) {
        console.error('Error clearing state from localStorage:', error);
      }
    }
  },

  hasState: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) !== null;
    }
    return false;
  },
};
