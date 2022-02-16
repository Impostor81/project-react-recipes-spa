import React from 'react';
import Meal from './Meal';


export default function MealsList(props) {
  const {meals} = props;

  return (
    <div className='list'>
      {meals.map(item => <Meal key={item.idMeal} {...item}/>)}
    </div>
  )
}
