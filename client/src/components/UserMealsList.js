import React from 'react';

import UserMeal from './UserMeal';
import { Link } from 'react-router';

class UserMealsList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchUserMeals(this.props.userToken, this.props.userId);
  }

  render() {
    if(this.props.isFetching) {
      return <div> Loading user meals</div>
    }

    const meals = this.props.meals.map((meal, index) => {
      return (
        <Link to={`meal/${meal.id}`} key={meal.id}>
          <UserMeal userMeal={meal} key={meal.id} />
        </Link>
      )
    });

    return (
      <div>
        {meals}
      </div>
    )
  }
}

export default UserMealsList;