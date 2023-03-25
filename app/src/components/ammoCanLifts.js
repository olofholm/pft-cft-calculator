import React, { useState } from "react";
import '../App.css';

const AmmoCanLifts = ({ isMale, age, setAclScore }) => {

  const reps = e.target.value;

  const calculateScore = (e) => {

  }

  return (
    <div className="event-container">
      <h2>Ammo Can Lifts</h2>
      <input onChange={calculateScore} type='number' placeholder='Reps' className="reps" style={{alignSelf: 'center'}}/>
    </div>
  );
}

export default AmmoCanLifts;