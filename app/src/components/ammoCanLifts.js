import React, { useState } from "react";
import '../App.css';

const AmmoCanLifts = ({ isMale, age, setAclScore }) => {

  //MALE LIFTS
  //17 to 20
  const male17to20 = [  { rep: 62, score: 40 }, { rep: 63, score: 41 }, { rep: 64, score: 43 }, { rep: 65, score: 44 }, { rep: 66, score: 45 }, { rep: 67, score: 47 }, { rep: 68, score: 48 }, { rep: 69, score: 50 }, { rep: 70, score: 51 }, { rep: 71, score: 52 }, { rep: 72, score: 54 }, { rep: 73, score: 55 }, { rep: 74, score: 56 }, { rep: 75, score: 58 }, { rep: 76, score: 59 }, { rep: 77, score: 60 }, { rep: 78, score: 62 }, { rep: 79, score: 63 }, { rep: 80, score: 65 }, { rep: 81, score: 66 }, { rep: 82, score: 67 }, { rep: 83, score: 69 }, { rep: 84, score: 70 }, { rep: 85, score: 71 }, { rep: 86, score: 73 }, { rep: 87, score: 74 }, { rep: 88, score: 75 }, { rep: 89, score: 77 }, { rep: 90, score: 78 }, { rep: 91, score: 80 }, { rep: 92, score: 81 }, { rep: 93, score: 82 }, { rep: 94, score: 84 }, { rep: 95, score: 85 }, { rep: 96, score: 86 }, { rep: 97, score: 88 }, { rep: 98, score: 89 }, { rep: 99, score: 90 }, { rep: 100, score: 92 }, { rep: 101, score: 93 }, { rep: 102, score: 95 }, { rep: 103, score: 96 }, { rep: 104, score: 97 }, { rep: 105, score: 99 }, { rep: 106, score: 100 } ];
  const male17to20MAX = 106;
  
  //21 to 25
  const male21to25 = [  { rep: 67, score: 40 }, { rep: 68, score: 41 }, { rep: 69, score: 43 }, { rep: 70, score: 44 }, { rep: 71, score: 45 }, { rep: 72, score: 46 }, { rep: 73, score: 48 }, { rep: 74, score: 49 }, { rep: 75, score: 50 }, { rep: 76, score: 51 }, { rep: 77, score: 53 }, { rep: 78, score: 54 }, { rep: 79, score: 55 }, { rep: 80, score: 56 }, { rep: 81, score: 58 }, { rep: 82, score: 59 }, { rep: 83, score: 60 }, { rep: 84, score: 61 }, { rep: 85, score: 63 }, { rep: 86, score: 64 }, { rep: 87, score: 65 }, { rep: 88, score: 66 }, { rep: 89, score: 68 }, { rep: 90, score: 69 }, { rep: 91, score: 70 }, { rep: 92, score: 71 }, { rep: 93, score: 73 }, { rep: 94, score: 74 }, { rep: 95, score: 75 }, { rep: 96, score: 76 }, { rep: 97, score: 78 }, { rep: 98, score: 79 }, { rep: 99, score: 80 }, { rep: 100, score: 81 }, { rep: 101, score: 83 }, { rep: 102, score: 84 }, { rep: 103, score: 85 }, { rep: 104, score: 86 }, { rep: 105, score: 88 }, { rep: 106, score: 89 }, { rep: 107, score: 90 }, { rep: 108, score: 91 }, { rep: 109, score: 93 }, { rep: 110, score: 94 }, { rep: 111, score: 95 }, { rep: 112, score: 96 }, { rep: 113, score: 98 }, { rep: 114, score: 99 }, { rep: 115, score: 100 } ];
  const male21to25MAX = 115;

  //26 to 30
  const male26to30 = [  { rep: 67, score: 40 }, { rep: 68, score: 41 }, { rep: 69, score: 42 }, { rep: 70, score: 44 }, { rep: 71, score: 45 }, { rep: 72, score: 46 }, { rep: 73, score: 47 }, { rep: 74, score: 49 }, { rep: 75, score: 50 }, { rep: 76, score: 51 }, { rep: 77, score: 52 }, { rep: 78, score: 53 }, { rep: 79, score: 55 }, { rep: 80, score: 56 }, { rep: 81, score: 57 }, { rep: 82, score: 58 }, { rep: 83, score: 60 }, { rep: 84, score: 61 }, { rep: 85, score: 62 }, { rep: 86, score: 63 }, { rep: 87, score: 64 }, { rep: 88, score: 66 }, { rep: 89, score: 67 }, { rep: 90, score: 68 }, { rep: 91, score: 69 }, { rep: 92, score: 71 }, { rep: 93, score: 72 }, { rep: 94, score: 73 }, { rep: 95, score: 74 }, { rep: 96, score: 76 }, { rep: 97, score: 77 }, { rep: 98, score: 78 }, { rep: 99, score: 79 }, { rep: 100, score: 80 }, { rep: 101, score: 82 }, { rep: 102, score: 83 }, { rep: 103, score: 84 }, { rep: 104, score: 85 }, { rep: 105, score: 87 }, { rep: 106, score: 88 }, { rep: 107, score: 89 }, { rep: 108, score: 90 }, { rep: 109, score: 91 }, { rep: 110, score: 93 }, { rep: 111, score: 94 }, { rep: 112, score: 95 }, { rep: 113, score: 96 }, { rep: 114, score: 98 }, { rep: 115, score: 99 }, { rep: 116, score: 100 } ];
  const male26to30MAX = 116;

  //31 to 35
  const male31to35 =
  const male31to35MAX = 120;

  //36 to 40
  const male36to40 =
  const male36to40MAX = 110;

  //41 to 45
  const male41to45 =
  const male41to45MAX = 106;

  //46 to 50
  const male46to50 =
  const male46to50MAX = 100;

  //51 and Up
  const male51 =
  const male51MAX = 95;

  //FEMALE LIFTS
  //17 to 20
  const female17to20 =
  const female17to20MAX = 66;
  
  //21 to 25
  const female21to25 =
  const female21to25MAX = 74;

  //26 to 30
  const female26to30 =
  const female26to30MAX = 75;

  //31 to 35
  const female31to35 =
  const female31to35MAX = 72;

  //36 to 40
  const female36to40 =
  const female36to40MAX = 70;

  //41 to 45
  const female41to45 =
  const female41to45MAX = 62;

  //46 to 50
  const female46to50 =
  const female46to50MAX = 53;

  //51 and Up
  const female51 =
  const female51MAX = 44;

  const calculateScore = (e) => {
    const reps = e.target.value;
  }

  return (
    <div className="event-container">
      <h2>Ammo Can Lifts</h2>
      <input onChange={calculateScore} type='number' placeholder='Reps' className="reps" style={{alignSelf: 'center'}}/>
    </div>
  );
}

export default AmmoCanLifts;