
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ip = import.meta.env.VITE_IP;

const initialState = {
  boughts: [],
  page: 1,
  hasMore: true,
  boughtsLoading: true,

}

export const getPurchases = createAsyncThunk('getPurchases', async ({page, body}) => {
  try {
    const res = await fetch(ip + "admin/list-purchases?page=" + page, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});





export const boughtsSlice = createSlice({
  name: 'boughts',
  initialState,
  reducers: {
    resetPage: (state) => {
      state.page = 1
    },

  },//builder
  extraReducers: (builder) => {

    builder.addCase(getPurchases.fulfilled, (state, action) => {

      if (action.payload.success) {
        if (action.payload.data[0]?.pagination?.total_page >= action.payload.data[0]?.pagination?.current_page) {

          state.boughtsLoading = false
          if(state.page > 1 ){

            state.boughts.push(...action.payload.data[0].data)
          }else{
            state.boughts = action.payload.data[0].data
          }
          
          state.page += 1;
        }else{
          state.hasMore = false
        }
      } else {
        state.hasMore = false
      }



    });
  },
})

// Action creators are generated for each case reducer function
export const { resetPage } = boughtsSlice.actions

export default boughtsSlice.reducer