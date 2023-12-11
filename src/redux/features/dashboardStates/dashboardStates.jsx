
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ip = import.meta.env.VITE_IP;

const initialState = {
  gains: {},
  gainsweekly: [0, 0, 0, 0, 0, 0, 0],
  gainsthisyear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  openedKresThisYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    const today = new Date();
    const last7DaysDate = new Date(today);
    last7DaysDate.setDate(today.getDate() - 7);
    const last30DaysDate = new Date(today);
    last30DaysDate.setDate(today.getDate() - 30);

    const formattedToday = today.toISOString().split('T')[0];
    const last6MonthsDate = new Date(today);
    last6MonthsDate.setMonth(today.getMonth() - 6);

    const formattedLast7Days = last7DaysDate.toISOString().split('T')[0];
    const formattedLast30Days = last30DaysDate.toISOString().split('T')[0];
    const formattedLast6Months = last6MonthsDate.toISOString().split('T')[0];

    const last6months = {
      "firstDate": formattedLast6Months,
      "secondDate": formattedToday
    };


    const last30days = {
      "firstDate": formattedLast30Days,
      "secondDate": formattedToday
    };

    const last7days = {
      "firstDate": formattedLast7Days,
      "secondDate": formattedToday
    };
    const allTime = {
      "firstDate": "2020-3-20",
      "secondDate": "2050-12-23"
    };

    const res = await fetch(ip + "admin/get-progress-payment/", {
      method: "POST",
      body: JSON.stringify(last7days)
    })
    const res2 = await fetch(ip + "admin/get-progress-payment/", {
      method: "POST",
      body: JSON.stringify(last30days)
    })
    const res3 = await fetch(ip + "admin/get-progress-payment/", {
      method: "POST",
      body: JSON.stringify(last6months)
    })
    const res4 = await fetch(ip + "admin/get-progress-payment/", {
      method: "POST",
      body: JSON.stringify(allTime)
    })

    const data = await res.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
    const data4 = await res4.json();


    const values = {
      "success": 1,
      "data": {
        "last7days": data.data[0],
        "last30days": data2.data[0],
        "last6months": data3.data[0],
        "totalGained": data4.data[0],
      }
    }



    return values
  } catch (error) {
    console.log(error);

    throw error;
  }
});





export const getGainsWeekly = createAsyncThunk('getGainsWeekly', async () => {
  try {
    const today = new Date();

    let array = [];

    for (let index = 7; index > 0; index--) {
      let last7DaysDate = new Date(today);
      last7DaysDate.setDate(today.getDate() - index);

      const formattedLast7Days = last7DaysDate.toISOString().split('T')[0];

      const last7days = {
        "firstDate": formattedLast7Days,
        "secondDate": formattedLast7Days
      };
      const res = await fetch("admin/get-progress-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(last7days)

      })

      const data = await res.json();
      array[last7DaysDate.getDay()] = data.data[0]
    }

    return array;
  } catch (error) {
    console.log(error);

    throw error;
  }
});





export const getGainsThisYear = createAsyncThunk('getGainsThisYear', async () => {

  const res = await fetch(ip + "admin/get-annual-progress-payment",)
  const data = await res.json();

  const lastYearCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


  data.data[0].map((element) => {
    if (element.month == "1") {
      lastYearCounts[0] = element.payment
    }
    if (element.month == "2") {
      lastYearCounts[1] = element.payment
    }
    if (element.month == "3") {
      lastYearCounts[2] = element.payment
    }
    if (element.month == "4") {
      lastYearCounts[3] = element.payment
    }
    if (element.month == "5") {
      lastYearCounts[4] = element.payment
    }
    if (element.month == "6") {
      lastYearCounts[5] = element.payment
    }
    if (element.month == "7") {
      lastYearCounts[6] = element.payment
    }
    if (element.month == "8") {
      lastYearCounts[7] = element.payment
    }
    if (element.month == "9") {
      lastYearCounts[8] = element.payment
    }
    if (element.month == "10") {
      lastYearCounts[9] = element.payment
    }
    if (element.month == "11") {
      lastYearCounts[10] = element.payment
    }
    if (element.month == "12") {
      lastYearCounts[11] = element.payment
    }
  })

  return lastYearCounts
});




export const getOpenedKresThisYear = createAsyncThunk('getOpenedKresThisYear', async () => {
  try {

    const res = await fetch(ip + "admin/get-opened-schools/",)
    const data = await res.json();

    const lastYearCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


    data.data[0].map((element) => {
      if (element.month.slice(-2) == "-1") {
        lastYearCounts[0] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-2") {
        lastYearCounts[1] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-3") {
        lastYearCounts[2] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-4") {
        lastYearCounts[3] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-5") {
        lastYearCounts[4] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-6") {
        lastYearCounts[5] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-7") {
        lastYearCounts[6] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-8") {
        lastYearCounts[7] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "-9") {
        lastYearCounts[8] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "10") {
        lastYearCounts[9] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "11") {
        lastYearCounts[10] = parseInt(element.count)
      }
      if (element.month.slice(-2) == "12") {
        lastYearCounts[11] = parseInt(element.count)
      }

    })

    return lastYearCounts
  } catch (error) {
    console.log(error);

    throw error;
  }
});



export const getStatistic = createAsyncThunk('getStatistic', async () => {
  try {

    const res = await fetch(ip + "admin/get-statistic/",)
    const data = await res.json();

    return data
  } catch (error) {
    console.log(error);

    throw error;
  }
});




export const getLastBought = createAsyncThunk('getLastBought', async () => {
  try {

    const res = await fetch(ip + "admin/list-purchases/",)
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
      state.gains = action.payload



    });
    builder.addCase(getGainsWeekly.fulfilled, (state, action) => {

      state.gainsweekly = action.payload



    });
    builder.addCase(getOpenedKresThisYear.fulfilled, (state, action) => {

      state.openedKresThisYear = action.payload



    });
    builder.addCase(getGainsThisYear.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.gainsLoading = false
        state.gainsthisyear = action.payload.data
      }



    });

    builder.addCase(getStatistic.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.studentCount = action.payload.data[0].studentCount
        state.ownerCount = action.payload.data[0].ownerCount
        state.teacherCount = action.payload.data[0].teacherCount
        state.kresCount = action.payload.data[0].schoolCount
      }



    });
    builder.addCase(getLastBought.fulfilled, (state, action) => {

      if (action.payload.success) {
        state.lastBoughtLoading = false
        state.lastBought = action?.payload?.data[0].data
      }



    });
  },
})

// Action creators are generated for each case reducer function
// export const { } = schoolsSlice.actions

export default gainsSlice.reducer