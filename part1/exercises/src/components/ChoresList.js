import React from 'react';
import classes from './MovieList.module.css';

export default function ChoresList () {
   return <ul>
      <li className={classes.movieText}>Do Dishes</li>
      <li className={classes.movieText}>Buy Groceries</li>
      <li className={classes.movieText}>Ship Package</li>
   </ul>;
}