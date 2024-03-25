import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const PersonSlice = createSlice({
  name: 'Person',
  initialState,
  reducers: {
    loadPerson: (state, actions) => {
      state.value = actions.payload
    },
    removePerson: (state) => {
      state.value = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadPerson, removePerson } = PersonSlice.actions

export default PersonSlice.reducer