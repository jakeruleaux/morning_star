import { combineReducers } from "redux";
import { reducer } from 'redux-form';
import isadminReducer from './isadminReducer';


export default combineReducers({
   isAdmin: isadminReducer,
   form: reducer
});