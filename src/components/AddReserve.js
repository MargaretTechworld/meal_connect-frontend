import React from 'react';
import Navigation from './navigation/Navigation';
import MealInfo from './cards/MealInfo';

const AddReserve = () => (
  <div className="flex flex-col ss:flex-row">
    <Navigation />
    <MealInfo />

  </div>
);

export default AddReserve;
