import React, { useState } from "react";
import './App.css';
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
    <>
    <div className="background"></div>
    <div className="header-container">
      <img src={ega} alt='USMC Eagle Glode and Anchor' style={{height: '50px', width: '50px'}}/>
      <h1>USMC PFT/CFT Calculator</h1>
      <img src={ega} alt='USMC Eagle Glode and Anchor' style={{height: '50px', width: '50px'}}/>
    </div>
    </>
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
      <input className="age-input" type='number' name='age' placeholder=' Age' onChange={changeAge}/>
    </div>
  );
}

// *** SCOREBOARD ***
const ScoreboardPFT = (props) => {

  const totalScore = props.rrScore + props.plankScore + props.ppScore;

  return (
    <div className="event-container">
      <h2>Results</h2>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0px 50px 0px 30px'}}>
        <h3>Push-Ups/Pull-Ups:</h3><h3>{props.ppScore}</h3>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0px 50px 0px 30px'}}>
        <h3>Plank:</h3><h3>{props.plankScore}</h3>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0px 50px 0px 30px'}}>
        <h3>Run/Row:</h3><h3>{props.rrScore}</h3>
      </div>
      <h3>Total Score: {totalScore}</h3>
      {
        props.ppScore === 0 || props.plankScore === 0 || props.rrScore === 0 ? (<h2 style={{color: "red"}}>Unqualified...</h2>)
        : totalScore >= 235 ? 
          (<h2 style={{color: "rgb(0, 240, 0)"}}>1st Class!</h2>)
          : totalScore >= 200 ?
            (<h2 style={{color: "yellow"}}>2nd Class!</h2>)
            : totalScore >= 150 ?
              (<h2 style={{color: "orange"}}>3rd Class!</h2>)
              : (<h2 style={{color: "red"}}>Unqualified...</h2>)
      }
    </div>
  );
}

const ScoreboardCFT = (props) => {

  const totalScore = props.mtcScore + props.aclScore + props.mufScore;

  return (
    <div className="event-container">
      <h2>Results:</h2>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0px 50px 0px 30px'}}>
        <h3>Movement To Contact:</h3><h3>{props.mtcScore}</h3>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0px 50px 0px 30px'}}>
        <h3>Ammo Can Lift:</h3><h3>{props.aclScore}</h3>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0px 50px 0px 30px'}}>
        <h3>Maneuver Under Fire:</h3><h3>{props.mufScore}</h3>
      </div>
      <h3>Total Score: {totalScore}</h3>
      {
        props.mtcScore === 0 || props.aclScore === 0 || props.mufScore === 0 ? (<h2 style={{color: "red"}}>Unqualified...</h2>)
        : totalScore >= 235 ? 
          (<h2 style={{color: "rgb(0, 240, 0)"}}>1st Class!</h2>)
          : totalScore >= 200 ?
            (<h2 style={{color: "yellow"}}>2nd Class!</h2>)
            : totalScore >= 150 ?
              (<h2 style={{color: "orange"}}>3rd Class!</h2>)
              : (<h2 style={{color: "red"}}>Unqualified...</h2>)
      }
    </div>
  );
}

//Bottom of page link to USMC HQ PFT/CFT page
const Link = () => {
  return (
    <div className="event-container">
      <h2>Easy Ways To Improve:</h2>
      <h3>Pull-Ups</h3>
      <ol>
        <li>Strengthen your grip: A strong grip is crucial for executing pull-ups. Utilize exercises like deadlifts, farmer's walks, and hanging from a bar to improve your grip strength.</li>
        <br></br>
        <li>Practice hanging: Hang from a pull-up bar for as long as possible. This will help develop the necessary grip strength, as well as strengthen the muscles required for pull-ups.</li>
        <br></br>
        <li>Use resistance bands: Resistance bands can be helpful in assisting you with completing pull-ups. Attach the band to the bar, place your foot in it, and it will help to lift you up.</li>
        <br></br>
        <li>Use proper form: Correct form is essential for effective pull-ups. Keep your shoulders down, engage your core, and pull your body up until your chin is over the bar.</li>
        <br></br>
        <li>Train regularly: Consistent training is essential for improvement. Incorporate pull-ups into your routine at least twice a week.</li>
        <br></br>
        <li>Increase reps gradually: Start with a manageable number of reps and gradually increase as you improve. Aim for 3 sets of 5 reps, then move to 3 sets of 8 reps, and so on.</li>
      </ol>
      <a 
        href="https://www.fitness.marines.mil/pft-cft_standards17/"
        style={{color: 'red'}}
        target='_blank'
        rel="noreferrer noopener"
        >Learn more about PFT/CFT standards!
      </a>
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
      <Link />
    </>
  );
} 

export default App;
