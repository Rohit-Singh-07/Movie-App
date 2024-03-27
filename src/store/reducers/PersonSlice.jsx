import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    loadPerson: (state, actions) => {
      state.info = actions.payload
    },
    removePerson: (state) => {
      state.info = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadPerson, removePerson } = PersonSlice.actions

export default PersonSlice.reducer