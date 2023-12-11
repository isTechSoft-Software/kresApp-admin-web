
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ip = import.meta.env.VITE_IP;

const initialState = {
  allChecked: false,
  managers: [],
  usersLoading: true,
  page: 1,
  hasMore: true,


}

export const getManagers = createAsyncThunk('getManagers', async (page) => {
  try {

    const res = await fetch(ip +"/admin/list-schools?page=" + page,)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },//builder
  extraReducers: (builder) => {

    
    builder.addCase(getManagers.fulfilled, (state, action) => {
      
      if (action.payload.success) {
        state.usersLoading = false
        state.managers.push(...action.payload.data[0].data)
        state.page +=1 ;
      }else{
        state.hasMore = false
      }
    });
   
  },
})

// Action creators are generated for each case reducer function
// export const { } = schoolsSlice.actions

export default usersSlice.reducer