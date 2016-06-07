import React from 'react';
import MealItem from './MealItem';

export default class Meal extends React.Component {

  constructor(props) {
    super(props)
  }


  componentWillMount() {
    // Fetch the meal data
    const { userToken, params: { mealId } } = this.props
    this.props.fetchMealData(userToken, mealId);
  }

  render() {
    const mealItems = this.props.meal.map(meal => {
      return <MealItem food={meal.food} quantity={meal.qty} key={meal.id}/>
    })

    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.description}</h3>
        {mealItems}
      </div>
    )
  }
}