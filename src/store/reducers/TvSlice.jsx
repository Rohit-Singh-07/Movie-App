import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const TvSlice = createSlice({
  name: 'Tv',
  initialState,
  reducers: {
    loadTv: (state, actions) => {
      state.value = actions.payload
    },
    removeTv: (state) => {
      state.value = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadTv, removeTv } = TvSlice.actions

export default TvSlice.reducer