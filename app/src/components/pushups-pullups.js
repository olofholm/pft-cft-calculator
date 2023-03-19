import React, { useState } from "react";
import '../App.css';

//MALE PULL UPS SCORING TABLES
//From 17 to 20
const MalePullups17to20 = [
    {
        reps: 4,
        score: 40
    },
    {
        reps: 5,
        score: 44
    },
    {
        reps: 6,
        score: 48
    },
    {
        reps: 7,
        score: 51
    },
    {
        reps: 8,
        score: 55
    },
    {
        reps: 9,
        score: 59
    },
    {
        reps: 10,
        score: 63
    },
    {
        reps: 11,
        score: 66
    },
    {
        reps: 12,
        score: 70
    },
    {
        reps: 13,
        score: 74
    },
    {
        reps: 14,
        score: 78
    },
    {
        reps: 15,
        score: 81
    },
    {
        reps: 16,
        score: 85
    },
    {
        reps: 17,
        score: 89
    },
    {
        reps: 18,
        score: 93
    },
    {
        reps: 19,
        score: 96
    },
    {
        reps: 20,
        score: 100
    }
]
const MalePullups17to20MAX = 20;

//From 21 to 35
const MalePullups21to35 = [
  {
      reps: 5,
      score: 40
  },
  {
      reps: 6,
      score: 43
  },
  {
      reps: 7,
      score: 47
  },
  {
      reps: 8,
      score: 50
  },
  {
      reps: 9,
      score: 53
  },
  {
      reps: 10,
      score: 57
  },
  {
      reps: 11,
      score: 60
  },
  {
      reps: 12,
      score: 63
  },
  {
      reps: 13,
      score: 67
  },
  {
      reps: 14,
      score: 70
  },
  {
      reps: 15,
      score: 73
  },
  {
      reps: 16,
      score: 77
  },
  {
      reps: 17,
      score: 80
  },
  {
      reps: 18,
      score: 83
  },
  {
      reps: 19,
      score: 87
  },
  {
      reps: 20,
      score: 90
  },
  {
      reps: 21,
      score: 93
  },
  {
    reps: 22,
    score: 97
  },
  {
    reps: 23,
    score: 100
  }
]
const MalePullups21to35MAX = 23;

//From 36 to 40
const MalePullups36to40 = [
  {
      reps: 5,
      score: 40
  },
  {
      reps: 6,
      score: 44
  },
  {
      reps: 7,
      score: 48
  },
  {
      reps: 8,
      score: 51
  },
  {
      reps: 9,
      score: 55
  },
  {
      reps: 10,
      score: 59
  },
  {
      reps: 11,
      score: 63
  },
  {
      reps: 12,
      score: 66
  },
  {
      reps: 13,
      score: 70
  },
  {
      reps: 14,
      score: 74
  },
  {
      reps: 15,
      score: 78
  },
  {
      reps: 16,
      score: 81
  },
  {
      reps: 17,
      score: 85
  },
  {
      reps: 18,
      score: 89
  },
  {
      reps: 19,
      score: 93
  },
  {
      reps: 20,
      score: 96
  },
  {
      reps: 21,
      score: 100
  }
]
const MalePullups36to40MAX = 21;

//From 41 to 45
const MalePullups41to45 = [
  {
      reps: 5,
      score: 40
  },
  {
      reps: 6,
      score: 44
  },
  {
      reps: 7,
      score: 48
  },
  {
      reps: 8,
      score: 52
  },
  {
      reps: 9,
      score: 56
  },
  {
      reps: 10,
      score: 60
  },
  {
      reps: 11,
      score: 64
  },
  {
      reps: 12,
      score: 68
  },
  {
      reps: 13,
      score: 72
  },
  {
      reps: 14,
      score: 76
  },
  {
      reps: 15,
      score: 80
  },
  {
      reps: 16,
      score: 84
  },
  {
      reps: 17,
      score: 88
  },
  {
      reps: 18,
      score: 92
  },
  {
      reps: 19,
      score: 96
  },
  {
      reps: 20,
      score: 100
  }
]
const MalePullups41to45MAX = 20;

//From 41 to 45
const MalePullups46to50 = [
  {
    reps: 4,
    score: 40
  },
  {
      reps: 5,
      score: 44
  },
  {
      reps: 6,
      score: 48
  },
  {
      reps: 7,
      score: 52
  },
  {
      reps: 8,
      score: 56
  },
  {
      reps: 9,
      score: 60
  },
  {
      reps: 10,
      score: 64
  },
  {
      reps: 11,
      score: 68
  },
  {
      reps: 12,
      score: 72
  },
  {
      reps: 13,
      score: 76
  },
  {
      reps: 14,
      score: 80
  },
  {
      reps: 15,
      score: 84
  },
  {
      reps: 16,
      score: 88
  },
  {
      reps: 17,
      score: 92
  },
  {
      reps: 18,
      score: 96
  },
  {
      reps: 19,
      score: 100
  }
]
const MalePullups46to50MAX = 19;

//From 51 and up
const MalePullups51 = [
  {
    reps: 3,
    score: 40
  },
  {
    reps: 4,
    score: 44
  },
  {
      reps: 5,
      score: 48
  },
  {
      reps: 6,
      score: 52
  },
  {
      reps: 7,
      score: 56
  },
  {
      reps: 8,
      score: 60
  },
  {
      reps: 9,
      score: 64
  },
  {
      reps: 10,
      score: 68
  },
  {
      reps: 11,
      score: 72
  },
  {
      reps: 12,
      score: 76
  },
  {
      reps: 13,
      score: 80
  },
  {
      reps: 14,
      score: 84
  },
  {
      reps: 15,
      score: 88
  },
  {
      reps: 16,
      score: 92
  },
  {
      reps: 17,
      score: 96
  },
  {
      reps: 18,
      score: 100
  }
]
const MalePullups51Max = 18;

//FEMALE PULL UPS SCORING TABLE
//From 17 to 21
const FemalePullups17to20 = [
  {
      reps: 1,
      score: 60
  },
  {
      reps: 2,
      score: 67
  },
  {
      reps: 3,
      score: 73
  },
  {
      reps: 4,
      score: 80
  },
  {
      reps: 5,
      score: 87
  },
  {
      reps: 6,
      score: 93
  },
  {
      reps: 7,
      score: 100
  }
]
const FemalePullups17to20MAX = 7;

//From 21 to 25
const FemalePullups21to25 = [
  {
      reps: 3,
      score: 60
  },
  {
      reps: 4,
      score: 67
  },
  {
      reps: 5,
      score: 73
  },
  {
      reps: 6,
      score: 80
  },
  {
      reps: 7,
      score: 87
  },
  {
      reps: 8,
      score: 93
  },
  {
    reps: 9,
    score: 100
  },
  {
    reps: 10,
    score: 93
  },
  {
    reps: 11,
    score: 93
  }
]
const FemalePullups21to25MAX = 11;



const PushupsPullups = ({ isMale, age, setPpScore }) => {

    const [exercise, setExercise] = useState('pullups');
  
    const select = (e) => {
      setExercise(e.target.value);
    }
  
    const calculateScore = (e) => {

      const reps = e.target.value;

      if(exercise === 'pullups'){
        //MALE DOING PULL-UPS
        if(isMale){
          if(age >= 17 && age <= 20) {
            const getScore = MalePullups17to20.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePullups17to20MAX) setPpScore(100);
            else setPpScore(0);
          }
          else if(age >= 21 && age <= 35) {
            const getScore = MalePullups21to35.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePullups21to35MAX) setPpScore(100);
            else setPpScore(0);
          }
          else if(age >= 36 && age <= 40) {
            const getScore = MalePullups36to40.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePullups36to40MAX) setPpScore(100);
            else setPpScore(0);
          }
          else if(age >= 41 && age <= 45) {
            const getScore = MalePullups41to45.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePullups41to45MAX) setPpScore(100);
            else setPpScore(0);
          }
          else if(age >= 46 && age <= 50) {
            const getScore = MalePullups46to50.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePullups46to50MAX) setPpScore(100);
            else setPpScore(0);
          }
          else if(age >= 51) {
            const getScore = MalePullups51.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePullups51Max) setPpScore(100);
            else setPpScore(0);
          }
        }
  
        //FEMALE DOING PULL-UPS
        else {
          if(age >= 17 && age <= 20) {
            const getScore = FemalePullups17to20.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups17to20MAX) setPpScore(100);
            else setPpScore(0);
          }
        }
      }
      else {
        //MALE DOING PUSH-UPS
        if(isMale) {
          
        }
  
        //FEMALE DOING PUSH-UPS
        else {
  
        }
      }
    }
  
    return (
      <div className="event-container">
        <h2>Pull-Ups/Push-Ups</h2>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
          <select onChange={select}>
            <option value='pullups'>Pull-Ups</option>
            <option value='pushups'>Push-Ups</option>
          </select>
          <input type='number' placeholder='Reps' className="reps" onChange={calculateScore}></input>
        </div>
      </div>
    );
  }

  export default PushupsPullups;