import React, { useState } from "react";
import '../App.css';
import TimerPicker from 'react-time-picker';
import questionCircle from '../question-circle.svg';


//All Plank Score
const scoreTable =[
  { time: '00:01:10', score: 40 },
  { time: '00:01:11', score: 40 },
  { time: '00:01:12', score: 40 },
  { time: '00:01:13', score: 41 },
  { time: '00:01:14', score: 41 },
  { time: '00:01:15', score: 41 },
  { time: '00:01:16', score: 42 },
  { time: '00:01:17', score: 42 },
  { time: '00:01:18', score: 43 },
  { time: '00:01:19', score: 43 },
  { time: '00:01:20', score: 43 },
  { time: '00:01:21', score: 44 },
  { time: '00:01:22', score: 44 },
  { time: '00:01:23', score: 45 },
  { time: '00:01:24', score: 45 },
  { time: '00:01:25', score: 45 },
  { time: '00:01:26', score: 46 },
  { time: '00:01:27', score: 46 },
  { time: '00:01:28', score: 46 },
  { time: '00:01:29', score: 47 },
  { time: '00:01:30', score: 47 },
  { time: '00:01:31', score: 48 },
  { time: '00:01:32', score: 48 },
  { time: '00:01:33', score: 48 },
  { time: '00:01:34', score: 49 },
  { time: '00:01:35', score: 49 },
  { time: '00:01:36', score: 50 },
  { time: '00:01:37', score: 50 },
  { time: '00:01:38', score: 50 },
  { time: '00:01:39', score: 51 },
  { time: '00:01:40', score: 51 },
  { time: '00:01:41', score: 52 },
  { time: '00:01:42', score: 52 },
  { time: '00:01:43', score: 52 },
  { time: '00:01:44', score: 53 },
  { time: '00:01:45', score: 53 },
  { time: '00:01:46', score: 53 },
  { time: '00:01:47', score: 54 },
  { time: '00:01:48', score: 54 },
  { time: '00:01:49', score: 55 },
  { time: '00:01:50', score: 55 },
  { time: '00:01:51', score: 55 },
  { time: '00:01:52', score: 56 },
  { time: '00:01:53', score: 56 },
  { time: '00:01:54', score: 57 },
  { time: '00:01:55', score: 57 },
  { time: '00:01:56', score: 57 },
  { time: '00:01:57', score: 58 },
  { time: '00:01:58', score: 58 },
  { time: '00:01:59', score: 58 },
  { time: '00:02:00', score: 59 },
  { time: '00:02:01', score: 59 },
  { time: '00:02:02', score: 60 },
  { time: '00:02:03', score: 60 },
  { time: '00:02:04', score: 60 },
  { time: '00:02:05', score: 61 },
  { time: '00:02:06', score: 61 },
  { time: '00:02:07', score: 62 },
  { time: '00:02:08', score: 62 },
  { time: '00:02:09', score: 62 },
  { time: '00:02:10', score: 63 },
  { time: '00:02:11', score: 63 },
  { time: '00:02:12', score: 64 },
  { time: '00:02:13', score: 64 },
  { time: '00:02:14', score: 64 },
  { time: '00:02:15', score: 65 },
  { time: '00:02:16', score: 65 },
  { time: '00:02:17', score: 65 },
  { time: '00:02:18', score: 66 },
  { time: '00:02:19', score: 66 },
  { time: '00:02:20', score: 67 },
  { time: '00:02:21', score: 67 },
  { time: '00:02:22', score: 67 },
  { time: '00:02:23', score: 68 },
  { time: '00:02:24', score: 68 },
  { time: '00:02:25', score: 69 },
  { time: '00:02:26', score: 69 },
  { time: '00:02:27', score: 69 },
  { time: '00:02:28', score: 70 },
  { time: '00:02:29', score: 70 },
  { time: '00:02:30', score: 70 },
  { time: '00:02:31', score: 71 },
  { time: '00:02:32', score: 71 },
  { time: '00:02:33', score: 72 },
  { time: '00:02:34', score: 72 },
  { time: '00:02:35', score: 72 },
  { time: '00:02:36', score: 73 },
  { time: '00:02:37', score: 73 },
  { time: '00:02:38', score: 74 },
  { time: '00:02:39', score: 74 },
  { time: '00:02:40', score: 74 },
  { time: '00:02:41', score: 75 },
  { time: '00:02:42', score: 75 },
  { time: '00:02:43', score: 76 },
  { time: '00:02:44', score: 76 },
  { time: '00:02:45', score: 76 },
  { time: '00:02:46', score: 77 },
  { time: '00:02:47', score: 77 },
  { time: '00:02:48', score: 77 },
  { time: '00:02:49', score: 78 },
  { time: '00:02:50', score: 78 },
  { time: '00:02:51', score: 79 },
  { time: '00:02:52', score: 79 },
  { time: '00:02:53', score: 79 },
  { time: '00:02:54', score: 80 },
  { time: '00:02:55', score: 80 },
  { time: '00:02:56', score: 81 },
  { time: '00:02:57', score: 81 },
  { time: '00:02:58', score: 81 },
  { time: '00:02:59', score: 82 },
  { time: '00:03:00', score: 82 },
  { time: '00:03:01', score: 82 },
  { time: '00:03:02', score: 83 },
  { time: '00:03:03', score: 83 },
  { time: '00:03:04', score: 84 },
  { time: '00:03:05', score: 84 },
  { time: '00:03:06', score: 84 },
  { time: '00:03:07', score: 85 },
  { time: '00:03:08', score: 85 },
  { time: '00:03:09', score: 86 },
  { time: '00:03:10', score: 86 },
  { time: '00:03:11', score: 86 },
  { time: '00:03:12', score: 87 },
  { time: '00:03:13', score: 87 },
  { time: '00:03:14', score: 88 },
  { time: '00:03:15', score: 88 },
  { time: '00:03:16', score: 88 },
  { time: '00:03:17', score: 89 },
  { time: '00:03:18', score: 89 },
  { time: '00:03:19', score: 89 },
  { time: '00:03:20', score: 90 },
  { time: '00:03:21', score: 90 },
  { time: '00:03:22', score: 91 },
  { time: '00:03:23', score: 91 },
  { time: '00:03:24', score: 91 },
  { time: '00:03:25', score: 92 },
  { time: '00:03:26', score: 92 },
  { time: '00:03:27', score: 93 },
  { time: '00:03:28', score: 93 },
  { time: '00:03:29', score: 93 },
  { time: '00:03:30', score: 94 },
  { time: '00:03:31', score: 94 },
  { time: '00:03:32', score: 94 },
  { time: '00:03:33', score: 95 },
  { time: '00:03:34', score: 95 },
  { time: '00:03:35', score: 96 },
  { time: '00:03:36', score: 96 },
  { time: '00:03:37', score: 96 },
  { time: '00:03:38', score: 97 },
  { time: '00:03:39', score: 97 },
  { time: '00:03:40', score: 98 },
  { time: '00:03:41', score: 98 },
  { time: '00:03:42', score: 98 },
  { time: '00:03:43', score: 99 },
  { time: '00:03:44', score: 99 },
  { time: '00:03:45', score: 100 }
];

const Plank = ({ setPlankScore }) => {

  const calculateScore = (time) => {
    if(time != null){
      const score = scoreTable.find((s) => s.time == time.toString());
      const convertTime = time.match(/[0-9]/g);
      if(convertTime[2] > 0) setPlankScore(100);
      else if(convertTime[3] > 3) setPlankScore(100);
      else if(convertTime[3] >= 3 && convertTime[4] > 4) setPlankScore(100);
      else if(convertTime[3] >= 3 && convertTime[4] >= 4 && convertTime[5] >= 5) setPlankScore(100);
      else if(convertTime[3] < 1) setPlankScore(0);
      else if(convertTime[3] == 1 && convertTime[4] < 1) setPlankScore(0);
      else if(score) setPlankScore(score.score);
      else setPlankScore(0);
    }
  }

  return (
    <div className="event-container">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h2 style={{marginLeft: '156px'}}>Plank</h2>
        <a 
          style={{marginLeft: 'auto'}}
          href="https://www.fitness.marines.mil/Portals/211/Docs/PFT_CFT/PFT_CFT%20Standards/Plank%20Scoring%20Table.pdf?ver=qjyQlKiDx7i5hVOH6DCfkw%3d%3d"
          target='_blank'
           rel="noreferrer noopener"
        >
        <img src={questionCircle} alt='Question mark' style={{height: '24px', width: '24px'}}/>
        </a>
      </div>
      <TimerPicker onChange={calculateScore} maxDetail="second" format="mm:ss" disableClock={true} clearIcon={null} className='plank-time'/>
    </div>
  );
}

export default Plank;