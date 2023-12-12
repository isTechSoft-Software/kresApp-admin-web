
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

    const res = await fetch(ip + "admin/list-schools?page=" + page, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "text": "" })
    })
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

        if (action.payload.data[0].pagination.total_page >= action.payload.data[0].pagination.current_page) {
          state.usersLoading = false
          state.managers.push(...action.payload.data[0].data)
          state.page += 1;
        } else {
          state.hasMore = false
        }
      } else {
        state.hasMore = false
      }});

  },
})

// Action creators are generated for each case reducer function
// export const { } = schoolsSlice.actions

export default usersSlice.reducer