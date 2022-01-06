import { createEpicMiddleware } from 'redux-observable';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { jokeboxReducer } from '../features/Jokebox/Jokebox.slice';
import { rootEpic } from './root.epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    jokebox: jokeboxReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
