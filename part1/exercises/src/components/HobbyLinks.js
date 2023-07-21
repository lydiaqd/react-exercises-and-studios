import React from 'react';
import classes from './MovieList.module.css';

class HobbiesList extends React.Component {
    render() {
       const hobbyLinks = ["https://www.adobe.com/creativecloud/illustration/discover/learning-to-draw.html", "https://www.rollingstone.com/tv-movies/tv-movie-lists/best-horror-movies-of-all-time-1234597766/", "https://www.masterclass.com/articles/swimming-strokes"];
       return (
       <div>
          <h3 className = {classes.movieHeading}>My Hobbies</h3>
            <ol>
              <li><a href = {hobbyLinks[0]}>How to Draw</a></li>
              <li><a href = {hobbyLinks[1]}>Top Horror Movies</a></li>
              <li><a href = {hobbyLinks[2]}>Swimming Strokes</a></li>
            </ol>
       </div>
       );
    }
 }
 
 export default HobbiesList;