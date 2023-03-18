import React from "react";
import './App.css';
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
  
}



function App() {
  return (
    <>
      <Header />
      <PFTorCFT />
      <MFAge />
    </>
  );
} 

export default App;
