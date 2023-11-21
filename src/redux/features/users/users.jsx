
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ip = import.meta.env.VITE_IP;

const initialState = {
  all: [],
  allChecked: false,
  managers: [],
  teachers: [],
  parents: [],
  personels: [],
  students: [],
  usersLoading: true,

}

export const getAllUsers = createAsyncThunk('allUsers', async () => {
  try {

    const res = await fetch(ip +"allUsers/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getManagers = createAsyncThunk('getManagers', async () => {
  try {

    const res = await fetch(ip +"managers/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getTeachers = createAsyncThunk('getTeachers', async () => {
  try {

    const res = await fetch(ip +"teachers/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getPersonels = createAsyncThunk('getPersonels', async () => {
  try {

    const res = await fetch(ip +"personels/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getStudents = createAsyncThunk('getStudents', async () => {
  try {

    const res = await fetch(ip +"students/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});
export const getParents = createAsyncThunk('getParents', async () => {
  try {

    const res = await fetch(ip +"parents/",)
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

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.success && !state.allChecked) {
        state.usersLoading = false
        state.all = state.all.concat(action.payload.managers.data)
        state.all = state.all.concat(action.payload.parents.data)
        state.all = state.all.concat(action.payload.students.data)
        state.all = state.all.concat(action.payload.teachers.data)
        state.all = state.all.concat(action.payload.personels.data)
        state.allChecked = true


      } 
    });
    builder.addCase(getManagers.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.usersLoading = false
        state.managers = action.payload.data
      } 
    });
    builder.addCase(getParents.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.usersLoading = false
        state.parents = action.payload.data
      } 
    });
    builder.addCase(getPersonels.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.usersLoading = false
        state.personels = action.payload.data
      } 
    });
    builder.addCase(getStudents.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.usersLoading = false
        state.students = action.payload.data
      } 
    });
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.usersLoading = false
        state.teachers = action.payload.data
      } 
    });
  },
})

// Action creators are generated for each case reducer function
// export const { } = schoolsSlice.actions

export default usersSlice.reducer