import React from 'react';

import FoodItem from './FoodItem';
import Quantity from './Quantity'


const MealItem = (props) => {
  return (
    <div>
      <FoodItem food={props.food} quantity={props.quantity} />
    </div>
  )
}

export default MealItem