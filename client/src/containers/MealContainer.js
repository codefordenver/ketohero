import { connect } from 'react-redux';

import Meal from '../components/Meal';
import { fetchMealData } from '../actions';

const mapStateToProps = (state) => {
  return {
    meal: state.meal.mealData,
    isFetching: state.meal.isFetching,
    userToken: state.userManager.userToken
  }
};

const mapDispatchToProps = {
  fetchMealData
};

export default connect(mapStateToProps, mapDispatchToProps)(Meal);