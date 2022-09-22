import { configureStore } from '@reduxjs/toolkit'
import createSurveyReducer from '../features/createSurveySlice'
import surveyListReducer from '../features/surveyListSlice'

const store = configureStore({
  reducer: {
    createSurvey: createSurveyReducer,
    surveyList: surveyListReducer
  },
})

export default store;