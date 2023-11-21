
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ip = import.meta.env.VITE_IP;

const initialState = {
  schools: [],
  
  schoolsLoading: true,

}

export const getSchools = createAsyncThunk('getSchools', async () => {
  try {

    const res = await fetch(ip +"schools/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});




export const schoolsSlice = createSlice({
  name: 'schools',
  initialState,
  reducers: {

  },//builder
  extraReducers: (builder) => {

    builder.addCase(getSchools.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.schoolsLoading = false
        state.schools = action.payload.data
      }



    });
  },
})

// Action creators are generated for each case reducer function
// export const { } = schoolsSlice.actions

export default schoolsSlice.reducer