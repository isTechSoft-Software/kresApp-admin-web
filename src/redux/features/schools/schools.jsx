
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ip = import.meta.env.VITE_IP;

const initialState = {
  schools: [],
  page: 1,
  hasMore: true,
  schoolsLoading: true,

}

export const getSchools = createAsyncThunk('getSchools', async (page) => {
  try {
    const res = await fetch(ip +"admin/list-schools?page=" + page,{
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"text": ""})
    })
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
    incPage: (state) => {
      state.page += 1
    },

  },//builder
  extraReducers: (builder) => {

    builder.addCase(getSchools.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.schoolsLoading = false
        state.schools.push(...action.payload.data[0].data)
        state.page +=1 ;
      }else{
        state.hasMore = false
      }



    });
  },
})

// Action creators are generated for each case reducer function
// export const {incPage } = schoolsSlice.actions

export default schoolsSlice.reducer