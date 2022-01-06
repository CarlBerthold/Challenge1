import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
const jokeboxSlice = createSlice({
  name: 'jokebox',
  initialState,
  reducers: {},
});

export const jokeboxReducer = jokeboxSlice.reducer;

/* Vanilla redux
export const jokeboxReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ANY':
      break;

    default:
      return state;
  }
}; 
*/
