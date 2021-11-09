import { configureStore } from '@reduxjs/toolkit';
import GlobalStyleReducer from '../slices/GlobalStyleSlice'
import ComponentsReducer from '../slices/ComponentSlice'

export const store = configureStore({
  reducer: {
    GlobalStyle: GlobalStyleReducer,
    Components: ComponentsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
