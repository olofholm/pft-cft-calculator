import React, { useState } from "react";
import '../App.css';


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