import { configureStore } from '@reduxjs/toolkit';
import GlobalStyleReducer from '../slices/GlobalStyleSlice'

export const store = configureStore({
  reducer: {
    GlobalStyle: GlobalStyleReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
