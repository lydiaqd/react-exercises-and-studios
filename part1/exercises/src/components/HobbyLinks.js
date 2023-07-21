import React from 'react';

class HobbiesList extends React.Component {
    render() {
       const hobbies = ["Drawing", "Movies", "Swimming"];
       return (
       <div>
          <h3>My Hobbies</h3>
          <ol>
             <li>{hobbies[0]}</li>
             <li>{hobbies[1]}</li>
             <li>{hobbies[2]}</li>
          </ol>
       </div>
       );
    }
 }
 
 export default HobbiesList;