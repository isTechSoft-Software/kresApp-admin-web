
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ip = import.meta.env.VITE_IP;

const initialState = {
  gains: {},
  gainsweekly: [0,0,0,0,0,0,0],
  gainsthisyear: [0,0,0,0,0,0,0,0,0,0,0,0],
  openedKresThisYear: [0,0,0,0,0,0,0,0,0,0,0,0],
  gainsLoading: true,
  ownerCount: 0,
  teacherCount: 0,
  kresCount: 0,
  studentCount: 0,
  lastBought: [],
  lastBoughtLoading: true

}

export const getGains = createAsyncThunk('getGains', async () => {
  try {

    const res = await fetch(ip +"gains/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getGainsWeekly = createAsyncThunk('getGainsWeekly', async () => {
  try {

    const res = await fetch(ip +"gainsweekly/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getGainsThisYear = createAsyncThunk('getGainsThisYear', async () => {
  try {

    const res = await fetch(ip +"gainsthisyear/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getOpenedKresThisYear = createAsyncThunk('getOpenedKresThisYear', async () => {
  try {

    const res = await fetch(ip +"openedkresthisyear/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});



export const getOwnerCount = createAsyncThunk('getOwnerCount', async () => {
  try {

    const res = await fetch(ip +"ownercount/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getTeacherCount = createAsyncThunk('getTeacherCount', async () => {
  try {

    const res = await fetch(ip +"Teachercount/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getStudentCount = createAsyncThunk('getStudentCount', async () => {
  try {

    const res = await fetch(ip +"Studentcount/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getKresCount = createAsyncThunk('getKresCount', async () => {
  try {

    const res = await fetch(ip +"Krescount/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getLastBought = createAsyncThunk('getLastBought', async () => {
  try {

    const res = await fetch(ip +"lastBought/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});




export const gainsSlice = createSlice({
  name: 'gains',
  initialState,
  reducers: {

  },//builder
  extraReducers: (builder) => {

    builder.addCase(getGains.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.gains = action.payload.data
      }



    });
    builder.addCase(getGainsWeekly.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.gainsweekly = action.payload.data
      }



    });
    builder.addCase(getOpenedKresThisYear.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.openedKresThisYear = action.payload.data
      }



    });
    builder.addCase(getGainsThisYear.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.gainsthisyear = action.payload.data
      }



    });
    builder.addCase(getOwnerCount.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.ownerCount = action.payload.data
      }



    });
    builder.addCase(getTeacherCount.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.teacherCount = action.payload.data
      }



    });
    builder.addCase(getKresCount.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.kresCount = action.payload.data
      }



    });
    builder.addCase(getStudentCount.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.studentCount = action.payload.data
      }



    });
    builder.addCase(getLastBought.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.lastBoughtLoading= false
        state.gainsLoading = false
        state.lastBought = action.payload.data
      }



    });
  },
})

// Action creators are generated for each case reducer function
// export const { } = schoolsSlice.actions

export default gainsSlice.reducer