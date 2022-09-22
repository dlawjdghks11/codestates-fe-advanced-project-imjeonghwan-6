import { createSlice } from '@reduxjs/toolkit'

export const surveyListSlice = createSlice({
    name: 'surveyList',
    initialState: [],
    reducers: {
      add: (state, action) => {
        state = [action.payload, ...state];
      },
      remove: (state, action) => {
        state = state.filter((el) => {
          return el.title !== action.payload;
        })
      },
    }
  })
  export const { add, remove } = surveyListSlice.actions
  
  export default surveyListSlice.reducer