import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import GlobalStyleReducer from '../slices/GlobalStyleSlice'
import ComponentsReducer from '../slices/ComponentSlice'
import CodeWarsProfileReducer from '../slices/CodeWarsProfile';
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    GlobalStyle: GlobalStyleReducer,
    Components: ComponentsReducer,
    CodeWarsProfile: CodeWarsProfileReducer
  },
  middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware()
    .prepend(
      sagaMiddleware
    )
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
