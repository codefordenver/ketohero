import { combineReducers } from 'redux';
import userManager from './userManager';
import food from './food';
import userMeals from './userMeals';
import meal from './meal';


const ketoApp = combineReducers({
  userManager,
  food,
  meal,
  userMeals
});

export default ketoApp;
