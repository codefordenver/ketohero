const meal = (state = {
  mealData: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'REQUEST_MEAL_DATA':
      return {
        ...state,
        isFetching: true
      }
    case 'RECEIVE_MEAL_DATA':
      return {
        ...state,
        mealData: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}

export default meal;