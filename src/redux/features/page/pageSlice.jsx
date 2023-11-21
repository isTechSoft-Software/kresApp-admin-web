import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected1: "",
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setSelected1: (state,action) => {
      state.selected1 = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelected1} = pageSlice.actions

export default pageSlice.reducer