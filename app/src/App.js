import React, { useState } from "react";
import './App.css';
import TimerPicker from 'react-time-picker';
import ega from './ega.png';

import PushupsPullups from "./components/pushups-pullups";
import Plank from "./components/plank";
import RunningRowing from "./components/running-rowing";
import MovementToContact from "./components/movementToContact";
import AmmoCanLifts from "./components/ammoCanLifts";
import ManeuverUnderFire from "./components/maneuverUnderFire";

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

//  *** CFT EVENTS ***

// *** SCOREBOARD ***
const ScoreboardPFT = (props) => {
  return (
    <div className="event-container">
      <h2>Results</h2>
      <h3>Push-Ups/Pull-Ups: {props.ppScore}</h3>
      <h3>Plank: {props.plankScore}</h3>
      <h3>Run/Row: {props.rrScore}</h3>
    </div>
  );
}

const ScoreboardCFT = (props) => {
  return (
    <div className="event-container">
      <h2>Results</h2>
      <h3>Movement To Contact: {props.mtcScore}</h3>
      <h3>Ammo Can Lift: {props.aclScore}</h3>
      <h3>Movement Under Fire: {props.mufScore}</h3>
    </div>
  );
}


function App() {

  const [isPFT, setIsPFT] = useState(true);
  const [isMale, setIsMale] = useState(true);
  const [age, setAge] = useState(17);

  //PFT
  const [ppScore, setPpScore] = useState(0);
  const [plankScore, setPlankScore] = useState(0);
  const [rrScore, setRrScore] = useState(0);

  //CFT
  const [mtcScore, setMtcScore] = useState(0);
  const [aclScore, setAclScore] = useState(0);
  const [mufScore, setMufScore] = useState(0);
  
  return (
    <>
      <Header />
      <PFTorCFT setIsPFT={setIsPFT}/>
      <MFAge setIsMale={setIsMale} setAge={setAge}/>

      {isPFT ? (
          <>
          <PushupsPullups isMale={isMale} age={age} setPpScore={setPpScore}/>
          <Plank setPlankScore={setPlankScore}/>
          <RunningRowing isMale={isMale} age={age} setRrScore={setRrScore}/>
          <ScoreboardPFT ppScore={ppScore} plankScore={plankScore} rrScore={rrScore}/>
        </>
      ) : (
        <>
          <MovementToContact isMale={isMale} age={age} setMtcScore={setMtcScore}/>
          <AmmoCanLifts isMale={isMale} age={age} setAclScore={setAclScore}/>
          <ManeuverUnderFire isMale={isMale} age={age} setMufScore={setMufScore}/>
          <ScoreboardCFT mtcScore={mtcScore} aclScore={aclScore} mufScore={mufScore}/>
        </>
      )}
    </>
  );
} 

export default App;
