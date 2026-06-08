import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  votes: {}, // { [id]: voteCount }
};

const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    incrementVote: (state, action) => {
      const id = action.payload;
      state.votes[id] = (state.votes[id] || 0) + 1;
    },
  },
});

export const { incrementVote } = voteSlice.actions;
export default voteSlice.reducer;