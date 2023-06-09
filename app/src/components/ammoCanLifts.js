import React, { useState } from "react";
import '../App.css';
import questionCircle from '../question-circle.svg';

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
  const male31to35 = [  { rep: 67, score: 40 }, { rep: 68, score: 41 }, { rep: 69, score: 42 }, { rep: 70, score: 43 }, { rep: 71, score: 45 }, { rep: 72, score: 46 }, { rep: 73, score: 47 }, { rep: 74, score: 48 }, { rep: 75, score: 49 }, { rep: 76, score: 50 }, { rep: 77, score: 51 }, { rep: 78, score: 52 }, { rep: 79, score: 54 }, { rep: 80, score: 55 }, { rep: 81, score: 56 }, { rep: 82, score: 57 }, { rep: 83, score: 58 }, { rep: 84, score: 59 }, { rep: 85, score: 60 }, { rep: 86, score: 62 }, { rep: 87, score: 63 }, { rep: 88, score: 64 }, { rep: 89, score: 65 }, { rep: 90, score: 66 }, { rep: 91, score: 67 }, { rep: 92, score: 68 }, { rep: 93, score: 69 }, { rep: 94, score: 71 }, { rep: 95, score: 72 }, { rep: 96, score: 73 }, { rep: 97, score: 74 }, { rep: 98, score: 75 }, { rep: 99, score: 76 }, { rep: 100, score: 77 }, { rep: 101, score: 78 }, { rep: 102, score: 80 }, { rep: 103, score: 81 }, { rep: 104, score: 82 }, { rep: 105, score: 83 }, { rep: 106, score: 84 }, { rep: 107, score: 85 }, { rep: 108, score: 86 }, { rep: 109, score: 88 }, { rep: 110, score: 89 }, { rep: 111, score: 90 }, { rep: 112, score: 91 }, { rep: 113, score: 92 }, { rep: 114, score: 93 }, { rep: 115, score: 94 }, { rep: 116, score: 95 }, { rep: 117, score: 97 }, { rep: 118, score: 98 }, { rep: 119, score: 99 }, { rep: 120, score: 100 } ];
  const male31to35MAX = 120;

  //36 to 40
  const male36to40 = [  { rep: 67, score: 40 }, { rep: 68, score: 41 }, { rep: 69, score: 43 }, { rep: 70, score: 44 }, { rep: 71, score: 46 }, { rep: 72, score: 47 }, { rep: 73, score: 48 }, { rep: 74, score: 50 }, { rep: 75, score: 51 }, { rep: 76, score: 53 }, { rep: 77, score: 54 }, { rep: 78, score: 55 }, { rep: 79, score: 57 }, { rep: 80, score: 58 }, { rep: 81, score: 60 }, { rep: 82, score: 61 }, { rep: 83, score: 62 }, { rep: 84, score: 64 }, { rep: 85, score: 65 }, { rep: 86, score: 67 }, { rep: 87, score: 68 }, { rep: 88, score: 69 }, { rep: 89, score: 71 }, { rep: 90, score: 72 }, { rep: 91, score: 73 }, { rep: 92, score: 75 }, { rep: 93, score: 76 }, { rep: 94, score: 78 }, { rep: 95, score: 79 }, { rep: 96, score: 80 }, { rep: 97, score: 82 }, { rep: 98, score: 83 }, { rep: 99, score: 85 }, { rep: 100, score: 86 }, { rep: 101, score: 87 }, { rep: 102, score: 89 }, { rep: 103, score: 90 }, { rep: 104, score: 92 }, { rep: 105, score: 93 }, { rep: 106, score: 94 }, { rep: 107, score: 96 }, { rep: 108, score: 97 }, { rep: 109, score: 99 }, { rep: 110, score: 100 } ];
  const male36to40MAX = 110;

  //41 to 45
  const male41to45 = [  { rep: 66, score: 40 }, { rep: 67, score: 42 }, { rep: 68, score: 43 }, { rep: 69, score: 45 }, { rep: 70, score: 46 }, { rep: 71, score: 48 }, { rep: 72, score: 49 }, { rep: 73, score: 51 }, { rep: 74, score: 52 }, { rep: 75, score: 54 }, { rep: 76, score: 55 }, { rep: 77, score: 57 }, { rep: 78, score: 58 }, { rep: 79, score: 60 }, { rep: 80, score: 61 }, { rep: 81, score: 63 }, { rep: 82, score: 64 }, { rep: 83, score: 66 }, { rep: 84, score: 67 }, { rep: 85, score: 69 }, { rep: 86, score: 70 }, { rep: 87, score: 72 }, { rep: 88, score: 73 }, { rep: 89, score: 75 }, { rep: 90, score: 76 }, { rep: 91, score: 78 }, { rep: 92, score: 79 }, { rep: 93, score: 81 }, { rep: 94, score: 82 }, { rep: 95, score: 84 }, { rep: 96, score: 85 }, { rep: 97, score: 87 }, { rep: 98, score: 88 }, { rep: 99, score: 90 }, { rep: 100, score: 91 }, { rep: 101, score: 93 }, { rep: 102, score: 94 }, { rep: 103, score: 96 }, { rep: 104, score: 97 }, { rep: 105, score: 99 }, { rep: 106, score: 100 }, ];
  const male41to45MAX = 106;

  //46 to 50
  const male46to50 = [  { rep: 65, score: 40 }, { rep: 66, score: 42 }, { rep: 67, score: 43 }, { rep: 68, score: 45 }, { rep: 69, score: 47 }, { rep: 70, score: 49 }, { rep: 71, score: 50 }, { rep: 72, score: 52 }, { rep: 73, score: 54 }, { rep: 74, score: 55 }, { rep: 75, score: 57 }, { rep: 76, score: 59 }, { rep: 77, score: 61 }, { rep: 78, score: 62 }, { rep: 79, score: 64 }, { rep: 80, score: 66 }, { rep: 81, score: 67 }, { rep: 82, score: 69 }, { rep: 83, score: 71 }, { rep: 84, score: 73 }, { rep: 85, score: 74 }, { rep: 86, score: 76 }, { rep: 87, score: 78 }, { rep: 88, score: 79 }, { rep: 89, score: 81 }, { rep: 90, score: 83 }, { rep: 91, score: 85 }, { rep: 92, score: 86 }, { rep: 93, score: 88 }, { rep: 94, score: 90 }, { rep: 95, score: 91 }, { rep: 96, score: 93 }, { rep: 97, score: 95 }, { rep: 98, score: 97 }, { rep: 99, score: 98 }, { rep: 100, score: 100 } ];
  const male46to50MAX = 100;

  //51 and Up
  const male51 = [  { rep: 16, score: 40 }, { rep: 17, score: 41 }, { rep: 18, score: 42 }, { rep: 19, score: 42 }, { rep: 20, score: 43 }, { rep: 21, score: 44 }, { rep: 22, score: 45 }, { rep: 23, score: 45 }, { rep: 24, score: 46 }, { rep: 25, score: 47 }, { rep: 26, score: 48 }, { rep: 27, score: 48 }, { rep: 28, score: 49 }, { rep: 29, score: 50 }, { rep: 30, score: 51 }, { rep: 31, score: 51 }, { rep: 32, score: 52 }, { rep: 33, score: 53 }, { rep: 34, score: 54 }, { rep: 35, score: 54 }, { rep: 36, score: 55 }, { rep: 37, score: 56 }, { rep: 38, score: 57 }, { rep: 39, score: 57 }, { rep: 40, score: 58 }, { rep: 41, score: 59 }, { rep: 42, score: 60 }, { rep: 43, score: 61 }, { rep: 44, score: 61 }, { rep: 45, score: 62 }, { rep: 46, score: 63 }, { rep: 47, score: 64 }, { rep: 48, score: 64 }, { rep: 49, score: 65 }, { rep: 50, score: 66 }, { rep: 51, score: 67 }, { rep: 52, score: 67 }, { rep: 53, score: 68 }, { rep: 54, score: 69 }, { rep: 55, score: 70 }, { rep: 56, score: 70 }, { rep: 57, score: 71 }, { rep: 58, score: 72 }, { rep: 59, score: 73 }, { rep: 60, score: 73 }, { rep: 61, score: 74 }, { rep: 62, score: 75 }, { rep: 63, score: 76 }, { rep: 64, score: 76 }, { rep: 65, score: 77 }, { rep: 66, score: 78 }, { rep: 67, score: 79 }, { rep: 68, score: 79 }, { rep: 69, score: 80 }, { rep: 70, score: 81 }, { rep: 71, score: 82 }, { rep: 72, score: 83 }, { rep: 73, score: 83 }, { rep: 74, score: 84 }, { rep: 75, score: 85 }, { rep: 76, score: 86 }, { rep: 77, score: 86 }, { rep: 78, score: 87 }, { rep: 79, score: 88 }, { rep: 80, score: 89 }, { rep: 81, score: 89 }, { rep: 82, score: 90 }, { rep: 83, score: 91 }, { rep: 84, score: 92 }, { rep: 85, score: 92 }, { rep: 86, score: 93 }, { rep: 87, score: 94 }, { rep: 88, score: 95 }, { rep: 89, score: 95 }, { rep: 90, score: 96 }, { rep: 91, score: 97 }, { rep: 92, score: 98 }, { rep: 93, score: 98 }, { rep: 94, score: 99 }, { rep: 95, score: 100 } ];
  const male51MAX = 95;

  //FEMALE LIFTS
  //17 to 20
  const female17to20 = [  { rep: 30, score: 40 }, { rep: 31, score: 42 }, { rep: 32, score: 43 }, { rep: 33, score: 45 }, { rep: 34, score: 47 }, { rep: 35, score: 48 }, { rep: 36, score: 50 }, { rep: 37, score: 52 }, { rep: 38, score: 53 }, { rep: 39, score: 55 }, { rep: 40, score: 57 }, { rep: 41, score: 58 }, { rep: 42, score: 60 }, { rep: 43, score: 62 }, { rep: 44, score: 63 }, { rep: 45, score: 65 }, { rep: 46, score: 67 }, { rep: 47, score: 68 }, { rep: 48, score: 70 }, { rep: 49, score: 72 }, { rep: 50, score: 73 }, { rep: 51, score: 75 }, { rep: 52, score: 77 }, { rep: 53, score: 78 }, { rep: 54, score: 80 }, { rep: 55, score: 82 }, { rep: 56, score: 83 }, { rep: 57, score: 85 }, { rep: 58, score: 87 }, { rep: 59, score: 88 }, { rep: 60, score: 90 }, { rep: 61, score: 92 }, { rep: 62, score: 93 }, { rep: 63, score: 95 }, { rep: 64, score: 97 }, { rep: 65, score: 98 }, { rep: 66, score: 100 } ];
  const female17to20MAX = 66;
  
  //21 to 25
  const female21to25 = [  { rep: 30, score: 40 }, { rep: 31, score: 41 }, { rep: 32, score: 43 }, { rep: 33, score: 44 }, { rep: 34, score: 45 }, { rep: 35, score: 47 }, { rep: 36, score: 48 }, { rep: 37, score: 50 }, { rep: 38, score: 51 }, { rep: 39, score: 52 }, { rep: 40, score: 54 }, { rep: 41, score: 55 }, { rep: 42, score: 56 }, { rep: 43, score: 58 }, { rep: 44, score: 59 }, { rep: 45, score: 60 }, { rep: 46, score: 62 }, { rep: 47, score: 63 }, { rep: 48, score: 65 }, { rep: 49, score: 66 }, { rep: 50, score: 67 }, { rep: 51, score: 69 }, { rep: 52, score: 70 }, { rep: 53, score: 71 }, { rep: 54, score: 73 }, { rep: 55, score: 74 }, { rep: 56, score: 75 }, { rep: 57, score: 77 }, { rep: 58, score: 78 }, { rep: 59, score: 80 }, { rep: 60, score: 81 }, { rep: 61, score: 82 }, { rep: 62, score: 84 }, { rep: 63, score: 85 }, { rep: 64, score: 86 }, { rep: 65, score: 88 }, { rep: 66, score: 89 }, { rep: 67, score: 90 }, { rep: 68, score: 92 }, { rep: 69, score: 93 }, { rep: 70, score: 95 }, { rep: 71, score: 96 }, { rep: 72, score: 97 }, { rep: 73, score: 99 }, { rep: 74, score: 100 } ];
  const female21to25MAX = 74;

  //26 to 30
  const female26to30 = [  { rep: 30, score: 40 }, { rep: 31, score: 41 }, { rep: 32, score: 43 }, { rep: 33, score: 44 }, { rep: 34, score: 45 }, { rep: 35, score: 47 }, { rep: 36, score: 48 }, { rep: 37, score: 49 }, { rep: 38, score: 51 }, { rep: 39, score: 52 }, { rep: 40, score: 53 }, { rep: 41, score: 55 }, { rep: 42, score: 56 }, { rep: 43, score: 57 }, { rep: 44, score: 59 }, { rep: 45, score: 60 }, { rep: 46, score: 61 }, { rep: 47, score: 63 }, { rep: 48, score: 64 }, { rep: 49, score: 65 }, { rep: 50, score: 67 }, { rep: 51, score: 68 }, { rep: 52, score: 69 }, { rep: 53, score: 71 }, { rep: 54, score: 72 }, { rep: 55, score: 73 }, { rep: 56, score: 75 }, { rep: 57, score: 76 }, { rep: 58, score: 77 }, { rep: 59, score: 79 }, { rep: 60, score: 80 }, { rep: 61, score: 81 }, { rep: 62, score: 83 }, { rep: 63, score: 84 }, { rep: 64, score: 85 }, { rep: 65, score: 87 }, { rep: 66, score: 88 }, { rep: 67, score: 89 }, { rep: 68, score: 91 }, { rep: 69, score: 92 }, { rep: 70, score: 93 }, { rep: 71, score: 95 }, { rep: 72, score: 96 }, { rep: 73, score: 97 }, { rep: 74, score: 99 }, { rep: 75, score: 100 } ];
  const female26to30MAX = 75;

  //31 to 35
  const female31to35 = [  { rep: 30, score: 40 }, { rep: 31, score: 41 }, { rep: 32, score: 43 }, { rep: 33, score: 44 }, { rep: 34, score: 46 }, { rep: 35, score: 47 }, { rep: 36, score: 49 }, { rep: 37, score: 50 }, { rep: 38, score: 51 }, { rep: 39, score: 53 }, { rep: 40, score: 54 }, { rep: 41, score: 56 }, { rep: 42, score: 57 }, { rep: 43, score: 59 }, { rep: 44, score: 60 }, { rep: 45, score: 61 }, { rep: 46, score: 63 }, { rep: 47, score: 64 }, { rep: 48, score: 66 }, { rep: 49, score: 67 }, { rep: 50, score: 69 }, { rep: 51, score: 70 }, { rep: 52, score: 71 }, { rep: 53, score: 73 }, { rep: 54, score: 74 }, { rep: 55, score: 76 }, { rep: 56, score: 77 }, { rep: 57, score: 79 }, { rep: 58, score: 80 }, { rep: 59, score: 81 }, { rep: 60, score: 83 }, { rep: 61, score: 84 }, { rep: 62, score: 86 }, { rep: 63, score: 87 }, { rep: 64, score: 89 }, { rep: 65, score: 90 }, { rep: 66, score: 91 }, { rep: 67, score: 93 }, { rep: 68, score: 94 }, { rep: 69, score: 96 }, { rep: 70, score: 97 }, { rep: 71, score: 99 }, { rep: 72, score: 100 } ];
  const female31to35MAX = 72;

  //36 to 40
  const female36to40 = [  { rep: 30, score: 40 }, { rep: 31, score: 42 }, { rep: 32, score: 43 }, { rep: 33, score: 45 }, { rep: 34, score: 46 }, { rep: 35, score: 48 }, { rep: 36, score: 49 }, { rep: 37, score: 51 }, { rep: 38, score: 52 }, { rep: 39, score: 54 }, { rep: 40, score: 55 }, { rep: 41, score: 57 }, { rep: 42, score: 58 }, { rep: 43, score: 60 }, { rep: 44, score: 61 }, { rep: 45, score: 63 }, { rep: 46, score: 64 }, { rep: 47, score: 66 }, { rep: 48, score: 67 }, { rep: 49, score: 69 }, { rep: 50, score: 70 }, { rep: 51, score: 72 }, { rep: 52, score: 73 }, { rep: 53, score: 75 }, { rep: 54, score: 76 }, { rep: 55, score: 78 }, { rep: 56, score: 79 }, { rep: 57, score: 81 }, { rep: 58, score: 82 }, { rep: 59, score: 84 }, { rep: 60, score: 85 }, { rep: 61, score: 87 }, { rep: 62, score: 88 }, { rep: 63, score: 90 }, { rep: 64, score: 91 }, { rep: 65, score: 93 }, { rep: 66, score: 94 }, { rep: 67, score: 96 }, { rep: 68, score: 97 }, { rep: 69, score: 99 }, { rep: 70, score: 100 } ];
  const female36to40MAX = 70;

  //41 to 45
  const female41to45 = [  { rep: 28, score: 40 }, { rep: 29, score: 42 }, { rep: 30, score: 44 }, { rep: 31, score: 45 }, { rep: 32, score: 47 }, { rep: 33, score: 49 }, { rep: 34, score: 51 }, { rep: 35, score: 52 }, { rep: 36, score: 54 }, { rep: 37, score: 56 }, { rep: 38, score: 58 }, { rep: 39, score: 59 }, { rep: 40, score: 61 }, { rep: 41, score: 63 }, { rep: 42, score: 65 }, { rep: 43, score: 66 }, { rep: 44, score: 68 }, { rep: 45, score: 70 }, { rep: 46, score: 72 }, { rep: 47, score: 74 }, { rep: 48, score: 75 }, { rep: 49, score: 77 }, { rep: 50, score: 79 }, { rep: 51, score: 81 }, { rep: 52, score: 82 }, { rep: 53, score: 84 }, { rep: 54, score: 86 }, { rep: 55, score: 88 }, { rep: 56, score: 89 }, { rep: 57, score: 91 }, { rep: 58, score: 93 }, { rep: 59, score: 95 }, { rep: 60, score: 96 }, { rep: 61, score: 98 }, { rep: 62, score: 100 } ];
  const female41to45MAX = 62;

  //46 to 50
  const female46to50 = [  { rep: 26, score: 40 }, { rep: 27, score: 42 }, { rep: 28, score: 44 }, { rep: 29, score: 47 }, { rep: 30, score: 49 }, { rep: 31, score: 51 }, { rep: 32, score: 53 }, { rep: 33, score: 56 }, { rep: 34, score: 58 }, { rep: 35, score: 60 }, { rep: 36, score: 62 }, { rep: 37, score: 64 }, { rep: 38, score: 67 }, { rep: 39, score: 69 }, { rep: 40, score: 71 }, { rep: 41, score: 73 }, { rep: 42, score: 76 }, { rep: 43, score: 78 }, { rep: 44, score: 80 }, { rep: 45, score: 82 }, { rep: 46, score: 84 }, { rep: 47, score: 87 }, { rep: 48, score: 89 }, { rep: 49, score: 91 }, { rep: 50, score: 93 }, { rep: 51, score: 96 }, { rep: 52, score: 98 }, { rep: 53, score: 100 } ];
  const female46to50MAX = 53;

  //51 and Up
  const female51 = [  { rep: 6, score: 40 }, { rep: 7, score: 42 }, { rep: 8, score: 43 }, { rep: 9, score: 45 }, { rep: 10, score: 46 }, { rep: 11, score: 48 }, { rep: 12, score: 49 }, { rep: 13, score: 51 }, { rep: 14, score: 53 }, { rep: 15, score: 54 }, { rep: 16, score: 56 }, { rep: 17, score: 57 }, { rep: 18, score: 59 }, { rep: 19, score: 61 }, { rep: 20, score: 62 }, { rep: 21, score: 64 }, { rep: 22, score: 65 }, { rep: 23, score: 67 }, { rep: 24, score: 68 }, { rep: 25, score: 70 }, { rep: 26, score: 72 }, { rep: 27, score: 73 }, { rep: 28, score: 75 }, { rep: 29, score: 76 }, { rep: 30, score: 78 }, { rep: 31, score: 79 }, { rep: 32, score: 81 }, { rep: 33, score: 83 }, { rep: 34, score: 84 }, { rep: 35, score: 86 }, { rep: 36, score: 87 }, { rep: 37, score: 89 }, { rep: 38, score: 91 }, { rep: 39, score: 92 }, { rep: 40, score: 94 }, { rep: 41, score: 95 }, { rep: 42, score: 97 }, { rep: 43, score: 98 }, { rep: 44, score: 100 } ];
  const female51MAX = 44;

const AmmoCanLifts = ({ isMale, age, setAclScore }) => {

  const calculateScore = (e) => {
    
    const rep = e.target.value;

    //MALE
    if(isMale){
      if(age >= 17 && age <= 20) {
        const getScore = male17to20.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male17to20MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 21 && age <= 25) {
        const getScore = male21to25.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male21to25MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 26 && age <= 30) {
        const getScore = male26to30.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male26to30MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 31 && age <= 35) {
        const getScore = male31to35.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male31to35MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 36 && age <= 40) {
        const getScore = male36to40.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male36to40MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 41 && age <= 45) {
        const getScore = male41to45.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male41to45MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 46 && age <= 50) {
        const getScore = male46to50.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male46to50MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 51) {
        const getScore = male51.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= male51MAX) setAclScore(100);
        else setAclScore(0);
      }
    }
    //FEMALE
    else {
      if(age >= 17 && age <= 20) {
        const getScore = female17to20.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female17to20MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 21 && age <= 25) {
        const getScore = female21to25.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female21to25MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 26 && age <= 30) {
        const getScore = female26to30.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female26to30MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 31 && age <= 35) {
        const getScore = female31to35.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female31to35MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 36 && age <= 40) {
        const getScore = female36to40.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female36to40MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 41 && age <= 45) {
        const getScore = female41to45.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female41to45MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 46 && age <= 50) {
        const getScore = female46to50.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female46to50MAX) setAclScore(100);
        else setAclScore(0);
      }
      else if(age >= 51) {
        const getScore = female51.find((score) => score.rep == rep);
        if(getScore) setAclScore(getScore.score);
        else if(rep >= female51MAX) setAclScore(100);
        else setAclScore(0);
      }
    }

  }

  return (
    <div className="event-container">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h2 style={{marginLeft: '114px'}}>Ammo Can Lift</h2>
        <a 
          style={{marginLeft: 'auto'}}
          href="https://www.fitness.marines.mil/Portals/211/Docs/PFT_CFT/PFT_CFT%20Standards/Table%203-4-AL%20Scoring%20Tables.pdf?ver=2019-01-04-154009-507"
          target='_blank'
           rel="noreferrer noopener"
        >
        <img src={questionCircle} alt='Question mark' style={{height: '24px', width: '24px'}}/>
        </a>
      </div>
      <input onChange={calculateScore} type='number' placeholder='Reps' className="reps" style={{alignSelf: 'center'}}/>
    </div>
  );
}

export default AmmoCanLifts;