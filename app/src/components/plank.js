import React, { useState } from "react";
import '../App.css';
import TimerPicker from 'react-time-picker';

const Plank = () => {
  return (
    <div className="event-container">
      <h2>Plank</h2>
      <TimerPicker format="mm:ss" disableClock={true} clearIcon={null} className='plank-time'/>
    </div>
  );
}

export default Plank;