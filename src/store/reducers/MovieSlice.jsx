import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const MovieSlice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {
    loadMovie: (state, actions) => {
      state.value = actions.payload
    },
    removeMovie: (state) => {
      state.value = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadMovie, removeMovie } = MovieSlice.actions

export default MovieSlice.reducer