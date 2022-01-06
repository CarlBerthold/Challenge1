import { combineEpics } from 'redux-observable';
import { jokeboxEpics } from '../features/Jokebox/Jokebox.epics';

export const rootEpic = combineEpics(jokeboxEpics);
