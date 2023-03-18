import React from "react";
import './App.css';
import TimerPicker from 'react-time-picker';
import ega from './ega.png';

//Header of app
const Header = () => {
  return (
    <div className="header-container">
      <img src={ega} alt='EGA' height={50}/>
      <h1>USMC PFT/CFT Calculator</h1>
      <img src={ega} alt='EGA' height={50}/>
    </div>
  );
}

//Section to select to calculate a PFT or CFT
const PFTorCFT = () => {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <div className="pft-or-cft-container">
      <button onClick={handleClick} className="pftcft-button">PFT</button>
      <button onClick={handleClick} className="pftcft-button">CFT</button>
    </div>
  );
}

//Section to select gender and age
const MFAge = () => {
  return(
    <div className="mfage">
      <button className="male-female-button">MALE</button>
      <button className="male-female-button">FEMALE</button>
      <input className="age-input" type='number' name='age' placeholder='Age'/>
    </div>
  );
}

//  *** PFT EVENTS ***
const PushupsPullups = () => {

  return (
    <div className="event-container">
      <h2>Pull-Ups/Push-Ups</h2>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
        <select>
          <option value='pullups'>Pull-Ups</option>
          <option value='pushups'>Push-Ups</option>
        </select>
        <input type='number' placeholder='Reps' className="reps"></input>
      </div>
    </div>
  );
}

const Plank = () => {
  return (
    <div className="event-container">
      <h2>Plank</h2>
      <TimerPicker format="mm:ss" disableClock={true} className='plank-time'/>
    </div>
  );
}

const RunningRowing = () => {
  return (
    <div className="event-container">
      <h2>Running/Rowing</h2>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
        <select>
          <option value='3milerun'>3 Mile Run</option>
          <option value='3milerunAlt'>3 Mile Run (Altitude)</option>
          <option value='5kRow'>5K Rowing</option>
          <option value='5kRowAlt'>5K Rowing (Altitude)</option>
        </select>
        <TimerPicker format="mm:ss" disableClock={true} className='plank-time'/>
      </div>
    </div>
  );
}



function App() {
  return (
    <>
      <Header />
      <PFTorCFT />
      <MFAge />
      <PushupsPullups />
      <Plank />
      <RunningRowing />
    </>
  );
} 

export default App;
