import React from 'react';
import Navigation from './navigation/Navigation';
import MealDetails from './cards/MealDetail';
// import MealInfo from './cards/MealInfo';

const Details = () => (
  <div className="flex flex-col ss:flex-row">
    <Navigation />
    <MealDetails />
  </div>
);

export default Details;
