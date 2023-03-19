import React, { useState } from "react";
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
const PFTorCFT = ({setIsPFT}) => {

  const [pftButton, setPFTButton] = useState('pftcft-button-selected');
  const [cftButton, setCFTButton] = useState('pftcft-button');

  const handlePFTClick = () => {
    setIsPFT(true);
    setCFTButton('pftcft-button');
    setPFTButton('pftcft-button-selected');
  }

  const handleCFTClick = () => {
    setIsPFT(false);
    setPFTButton('pftcft-button');
    setCFTButton('pftcft-button-selected');
  }

  return (
    <div className="pft-or-cft-container">
      <button onClick={handlePFTClick} className={pftButton}>PFT</button>
      <button onClick={handleCFTClick} className={cftButton}>CFT</button>
    </div>
  );
}

//Section to select gender and age
const MFAge = ({setIsMale, setAge}) => {

  const [maleButton, setMaleButton] = useState('male-female-button-selected');
  const [femaleButton, setfemaleButton] = useState('male-female-button');

  const selectMale = () => {
    setIsMale(true);
    setfemaleButton('male-female-button');
    setMaleButton('male-female-button-selected');
  }

  const selectFemale = () => {
    setIsMale(false)
    setMaleButton('male-female-button');
    setfemaleButton('male-female-button-selected');
  }

  const changeAge = (e) => {
    if(e.target.value >= 17)  setAge(e.target.value);
    else console.log('Invalid age');
  }

  return(
    <div className="mfage">
      <button className={maleButton} onClick={selectMale}>MALE</button>
      <button className={femaleButton} onClick={selectFemale}>FEMALE</button>
      <input className="age-input" type='number' name='age' placeholder='Age' onChange={changeAge}/>
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
      <TimerPicker format="mm:ss" disableClock={true} clearIcon={null} className='plank-time'/>
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
        <TimerPicker format="mm:ss" disableClock={true} clearIcon={null} className='runrow-time'/>
      </div>
    </div>
  );
}

//  *** CFT EVENTS ***
const MovementToContact = () => {
  return (
    <div className="event-container">
      <h2>Movement to Contact</h2>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px'}}>
        <div style={{display: 'flex', alignContent: "center", justifyContent: "center"}}>
          <label htmlFor='altitudeMTC'>Altitude over 4500 feet: </label>
          <input type='checkbox' id='altitudeMTC' style={{height: '18px', width: '18px'}}/>
        </div>
        <TimerPicker format="mm:ss" disableClock={true} clearIcon={null} className='runrow-time'/>
      </div>
    </div>
  );
}

const AmmoCanLifts = () => {
  return (
    <div className="event-container">
      <h2>Ammo Can Lifts</h2>
      <input type='number' placeholder='Reps' className="reps" style={{alignSelf: 'center'}}/>
    </div>
  );
}

const ManeuverUnderFire = () => {
  return (
    <div className="event-container">
      <h2>Maneuver Under Fire</h2>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px'}}>
        <div style={{display: 'flex', alignContent: "center", justifyContent: "center"}}>
          <label htmlFor='altitudeMUF'>Altitude over 4500 feet: </label>
          <input type='checkbox' id='altitudeMUF' style={{height: '18px', width: '18px'}}/>
        </div>
        <TimerPicker format="mm:ss" disableClock={true} clearIcon={null} className='runrow-time'/>
      </div>
    </div>
  );
}

// *** SCOREBOARD ***
const Scoreboard = () => {
  return (
    <div className="event-container">
      <h2>Results</h2>
    </div>
  );
}


function App() {

  const [isPFT, setIsPFT] = useState(true);
  const [isMale, setIsMale] = useState(true);
  const [age, setAge] = useState(17);
  
  return (
    <>
      <Header />
      <PFTorCFT setIsPFT={setIsPFT}/>
      <MFAge setIsMale={setIsMale} setAge={setAge}/>

      {isPFT ? (
          <>
          <PushupsPullups />
          <Plank />
          <RunningRowing />
        </>
      ) : (
        <>
          <MovementToContact />
          <AmmoCanLifts />
          <ManeuverUnderFire />
        </>
      )}

      <Scoreboard />
    </>
  );
} 

export default App;
