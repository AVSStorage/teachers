import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import fileReducer from './fileReducer'
import courseReducer from './courseReducer'
import themeReducer from './themeReducer'
import lessonReducer from './lessonReducer'
import testReducer from './testReducer'
import modalReducer from './modalReducer'
import scheduleReducer from './scheduleReducer'
import linkReducer from './linkReducer';
import userReducer from './userReducer';
export default combineReducers({
   task: taskReducer,
   file: fileReducer,
   theme: themeReducer, 
   course: courseReducer,
   lesson: lessonReducer,
   test: testReducer,
   modal: modalReducer,
   schedule: scheduleReducer,
   link: linkReducer,
   user: userReducer
  })