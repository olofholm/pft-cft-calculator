import React from "react";
import './App.css';
import ega from './ega.png';

const Header = () => {
  return (
    <div className="main-container">
      <img src={ega} alt='EGA' height={50}/>
      <h1>USMC PFT/CFT Calculator</h1>
      <img src={ega} alt='EGA' height={50}/>
    </div>
  );
}

function App() {
  return (
    <Header />
  );
} 

export default App;
