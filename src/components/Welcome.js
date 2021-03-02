import React from 'react';
import './styles/Welcome.css'

const Welcome = ({ userName }) => (
  <React.Fragment className="container">
    <div className="Fitness-User-Info">
      <h1 className="slideUpBtn">Hi, {userName}</h1>
      <p>Let's workout to get someone fains!</p>
    </div>
  </React.Fragment>
)

export default Welcome