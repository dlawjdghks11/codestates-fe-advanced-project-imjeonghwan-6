import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  description: '',
  formData: [],
  completionNotice: '',
}

export const createSurveySlice = createSlice({
    name: 'createSurvey',
    initialState,
    reducers: {
      addQuestion: (state, action) => {
        state.formData = [...state.formData, action.payload]
      },
      setTitle: (state, action) => {
        state = action.payload
      }
    }
  })
  export const { addQuestion, setTitle } = createSurveySlice.actions;
  
  export default createSurveySlice.reducer;