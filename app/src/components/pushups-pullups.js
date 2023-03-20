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
];
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
];
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
];
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
];
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
];
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
];
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
];
const FemalePullups17to20MAX = 7;

//From 21 to 25
const FemalePullups21to25 = [
  {
      reps: 3,
      score: 60
  },
  {
      reps: 4,
      score: 65
  },
  {
      reps: 5,
      score: 70
  },
  {
      reps: 6,
      score: 75
  },
  {
      reps: 7,
      score: 80
  },
  {
      reps: 8,
      score: 85
  },
  {
    reps: 9,
    score: 90
  },
  {
    reps: 10,
    score: 95
  },
  {
    reps: 11,
    score: 100
  }
];
const FemalePullups21to25MAX = 11;

//From 26 to 30
const FemalePullups26to30 = [
  {
      reps: 4,
      score: 60
  },
  {
      reps: 5,
      score: 65
  },
  {
      reps: 6,
      score: 70
  },
  {
      reps: 7,
      score: 75
  },
  {
      reps: 8,
      score: 80
  },
  {
    reps: 9,
    score: 85
  },
  {
    reps: 10,
    score: 90
  },
  {
    reps: 11,
    score: 95
  },
  {
    reps: 12,
    score: 100
  }
];
const FemalePullups26to30MAX = 12;

//From 31 to 35
const FemalePullups31to35 = [
  {
      reps: 3,
      score: 60
  },
  {
      reps: 4,
      score: 65
  },
  {
      reps: 5,
      score: 70
  },
  {
      reps: 6,
      score: 75
  },
  {
      reps: 7,
      score: 80
  },
  {
      reps: 8,
      score: 85
  },
  {
    reps: 9,
    score: 90
  },
  {
    reps: 10,
    score: 95
  },
  {
    reps: 11,
    score: 100
  }
];
const FemalePullups31to35MAX = 11;

//From 36 to 40
const FemalePullups36to40 = [
  {
      reps: 3,
      score: 60
  },
  {
      reps: 4,
      score: 66
  },
  {
      reps: 5,
      score: 71
  },
  {
      reps: 6,
      score: 77
  },
  {
      reps: 7,
      score: 83
  },
  {
      reps: 8,
      score: 89
  },
  {
    reps: 9,
    score: 94
  },
  {
    reps: 10,
    score: 100
  }
];
const FemalePullups36to40MAX = 10;

//From 41 to 45
const FemalePullups41to45 = [  
  {
      reps: 2,
      score: 60
  },
  {
      reps: 3,
      score: 67
  },
  {
      reps: 4,
      score: 73
  },
  {
      reps: 5,
      score: 80
  },
  {
      reps: 6,
      score: 87
  },
  {
      reps: 7,
      score: 93
  },
  {
      reps: 8,
      score: 100
  }
];
const FemalePullups41to45MAX = 8;

//From 46 to 50
const FemalePullups46to50 = [  
  {
      reps: 2,
      score: 60
  },
  {
      reps: 3,
      score: 70
  },
  {
      reps: 4,
      score: 80
  },
  {
      reps: 5,
      score: 90
  },
  {
      reps: 6,
      score: 100
  }
];
const FemalePullups46to50MAX = 6;

//From 51 and Up
const FemalePullups51 = [  
  {
      reps: 2,
      score: 60
  },
  {
      reps: 3,
      score: 80
  },
  {
      reps: 4,
      score: 100
  }
];
const FemalePullups51MAX = 4;

//MALE PUSH UPS SCORING TABLE
//From 17 to 20
const MalePushups17to20 = [  
  {
    reps: 42,
    score: 40
  },
  {
    reps: 43,
    score: 41
  },
  {
    reps: 44,
    score: 42
  },
  {
    reps: 45,
    score: 42
  },
  {
    reps: 46,
    score: 43
  },
  {
    reps: 47,
    score: 44
  },
  {
    reps: 48,
    score: 45
  },
  {
    reps: 49,
    score: 45
  },
  {
    reps: 50,
    score: 46
  },
  {
    reps: 51,
    score: 47
  },
  {
    reps: 52,
    score: 48
  },
  {
    reps: 53,
    score: 48
  },
  {
    reps: 54,
    score: 49
  },
  {
    reps: 55,
    score: 50
  },
  {
    reps: 56,
    score: 51
  },
  {
    reps: 57,
    score: 51
  },
  {
    reps: 58,
    score: 52
  },
  {
    reps: 59,
    score: 53
  },
  {
    reps: 60,
    score: 54
  },
  {
    reps: 61,
    score: 54
  },
  {
    reps: 62,
    score: 55
  },
  {
    reps: 63,
    score: 56
  },
  {
    reps: 64,
    score: 57
  },
  {
    reps: 65,
    score: 57
  },
  {
    reps: 66,
    score: 58
  },
  {
    reps: 67,
    score: 59
  },
  {
    reps: 68,
    score: 60
  },
  {
    reps: 69,
    score: 60
  },
  {
    reps: 70,
    score: 61
  },
  {
    reps: 71,
    score: 62
  },
  {
    reps: 72,
    score: 63
  },
  {
    reps: 73,
    score: 63
  },
  {
    reps: 74,
    score: 64
  },
  {
    reps: 75,
    score: 65
  },
  {
    reps: 76,
    score: 66
  },
  {
    reps: 77,
    score: 66
  },
  {
    reps: 78,
    score: 67
  },
  {
    reps: 79,
    score: 68
  },
  {
    reps: 80,
    score: 69
  },
  {
    reps: 81,
    score: 69
  },
  {
    reps: 82,
    score: 70
  },

];
const MalePushups17to20MAX = 82;

//From 21 to 25
const MalePushups21to25 = [
  {
    reps: 40,
    score: 40
  },
  {
    reps: 41,
    score: 41
  },  
  {
    reps: 42,
    score: 41
  },
  {
    reps: 43,
    score: 42
  },
  {
    reps: 44,
    score: 43
  },
  {
    reps: 45,
    score: 43
  },
  {
    reps: 46,
    score: 44
  },
  {
    reps: 47,
    score: 44
  },
  {
    reps: 48,
    score: 45
  },
  {
    reps: 49,
    score: 46
  },
  {
    reps: 50,
    score: 46
  },
  {
    reps: 51,
    score: 47
  },
  {
    reps: 52,
    score: 48
  },
  {
    reps: 53,
    score: 48
  },
  {
    reps: 54,
    score: 49
  },
  {
    reps: 55,
    score: 50
  },
  {
    reps: 56,
    score: 50
  },
  {
    reps: 57,
    score: 51
  },
  {
    reps: 58,
    score: 51
  },
  {
    reps: 59,
    score: 52
  },
  {
    reps: 60,
    score: 53
  },
  {
    reps: 61,
    score: 53
  },
  {
    reps: 62,
    score: 54
  },
  {
    reps: 63,
    score: 55
  },
  {
    reps: 64,
    score: 55
  },
  {
    reps: 65,
    score: 56
  },
  {
    reps: 66,
    score: 57
  },
  {
    reps: 67,
    score: 57
  },
  {
    reps: 68,
    score: 58
  },
  {
    reps: 69,
    score: 59
  },
  {
    reps: 70,
    score: 59
  },
  {
    reps: 71,
    score: 60
  },
  {
    reps: 72,
    score: 60
  },
  {
    reps: 73,
    score: 61
  },
  {
    reps: 74,
    score: 62
  },
  {
    reps: 75,
    score: 62
  },
  {
    reps: 76,
    score: 63
  },
  {
    reps: 77,
    score: 64
  },
  {
    reps: 78,
    score: 64
  },
  {
    reps: 79,
    score: 65
  },
  {
    reps: 80,
    score: 66
  },
  {
    reps: 81,
    score: 66
  },
  {
    reps: 82,
    score: 67
  },
  {
    reps: 83,
    score: 67
  },
  {
    reps: 84,
    score: 68
  },
  {
    reps: 85,
    score: 69
  },
  {
    reps: 82,
    score: 67
  },
  {
    reps: 86,
    score: 69
  },
  {
    reps: 87,
    score: 70
  }
];
const MalePushups21to25MAX = 87;

//From 26 to 30
const MalePushups26to30 = [
  {
    reps: 39,
    score: 40
  },
  {
    reps: 40,
    score: 41
  },
  {
    reps: 41,
    score: 41
  },  
  {
    reps: 42,
    score: 42
  },
  {
    reps: 43,
    score: 43
  },
  {
    reps: 44,
    score: 43
  },
  {
    reps: 45,
    score: 44
  },
  {
    reps: 46,
    score: 45
  },
  {
    reps: 47,
    score: 45
  },
  {
    reps: 48,
    score: 46
  },
  {
    reps: 49,
    score: 47
  },
  {
    reps: 50,
    score: 47
  },
  {
    reps: 51,
    score: 48
  },
  {
    reps: 52,
    score: 49
  },
  {
    reps: 53,
    score: 49
  },
  {
    reps: 54,
    score: 50
  },
  {
    reps: 55,
    score: 51
  },
  {
    reps: 56,
    score: 51
  },
  {
    reps: 57,
    score: 52
  },
  {
    reps: 58,
    score: 53
  },
  {
    reps: 59,
    score: 53
  },
  {
    reps: 60,
    score: 54
  },
  {
    reps: 61,
    score: 55
  },
  {
    reps: 62,
    score: 55
  },
  {
    reps: 63,
    score: 56
  },
  {
    reps: 64,
    score: 57
  },
  {
    reps: 65,
    score: 57
  },
  {
    reps: 66,
    score: 58
  },
  {
    reps: 67,
    score: 59
  },
  {
    reps: 68,
    score: 59
  },
  {
    reps: 69,
    score: 60
  },
  {
    reps: 70,
    score: 61
  },
  {
    reps: 71,
    score: 61
  },
  {
    reps: 72,
    score: 62
  },
  {
    reps: 73,
    score: 63
  },
  {
    reps: 74,
    score: 63
  },
  {
    reps: 75,
    score: 64
  },
  {
    reps: 76,
    score: 65
  },
  {
    reps: 77,
    score: 65
  },
  {
    reps: 78,
    score: 66
  },
  {
    reps: 79,
    score: 67
  },
  {
    reps: 80,
    score: 67
  },
  {
    reps: 81,
    score: 68
  },
  {
    reps: 82,
    score: 69
  },
  {
    reps: 83,
    score: 69
  },
  {
    reps: 84,
    score: 70
  }
];
const MalePushups26to30MAX = 84;

//From 31 to 35
const MalePushups31to35 = [
  {
    reps: 36,
    score: 40
  },
  {
    reps: 37,
    score: 41
  },
  {
    reps: 38,
    score: 41
  },
  {
    reps: 39,
    score: 42
  },
  {
    reps: 40,
    score: 43
  },
  {
    reps: 41,
    score: 43
  },  
  {
    reps: 42,
    score: 44
  },
  {
    reps: 43,
    score: 45
  },
  {
    reps: 44,
    score: 45
  },
  {
    reps: 45,
    score: 46
  },
  {
    reps: 46,
    score: 47
  },
  {
    reps: 47,
    score: 48
  },
  {
    reps: 48,
    score: 48
  },
  {
    reps: 49,
    score: 49
  },
  {
    reps: 50,
    score: 50
  },
  {
    reps: 51,
    score: 50
  },
  {
    reps: 52,
    score: 51
  },
  {
    reps: 53,
    score: 52
  },
  {
    reps: 54,
    score: 52
  },
  {
    reps: 55,
    score: 53
  },
  {
    reps: 56,
    score: 54
  },
  {
    reps: 57,
    score: 54
  },
  {
    reps: 58,
    score: 55
  },
  {
    reps: 59,
    score: 56
  },
  {
    reps: 60,
    score: 56
  },
  {
    reps: 61,
    score: 57
  },
  {
    reps: 62,
    score: 58
  },
  {
    reps: 63,
    score: 58
  },
  {
    reps: 64,
    score: 59
  },
  {
    reps: 65,
    score: 60
  },
  {
    reps: 66,
    score: 60
  },
  {
    reps: 67,
    score: 61
  },
  {
    reps: 68,
    score: 62
  },
  {
    reps: 69,
    score: 63
  },
  {
    reps: 70,
    score: 63
  },
  {
    reps: 71,
    score: 64
  },
  {
    reps: 72,
    score: 65
  },
  {
    reps: 73,
    score: 65
  },
  {
    reps: 74,
    score: 66
  },
  {
    reps: 75,
    score: 67
  },
  {
    reps: 76,
    score: 67
  },
  {
    reps: 77,
    score: 68
  },
  {
    reps: 78,
    score: 69
  },
  {
    reps: 79,
    score: 69
  },
  {
    reps: 80,
    score: 70
  }
];
const MalePushups31to35MAX = 80;

//From 36 to 40
const MalePushups36to40 = [
  {
    reps: 34,
    score: 40
  },
  {
    reps: 35,
    score: 41
  },
  {
    reps: 36,
    score: 41
  },
  {
    reps: 37,
    score: 42
  },
  {
    reps: 38,
    score: 43
  },
  {
    reps: 39,
    score: 44
  },
  {
    reps: 40,
    score: 44
  },
  {
    reps: 41,
    score: 45
  },  
  {
    reps: 42,
    score: 46
  },
  {
    reps: 43,
    score: 46
  },
  {
    reps: 44,
    score: 47
  },
  {
    reps: 45,
    score: 48
  },
  {
    reps: 46,
    score: 49
  },
  {
    reps: 47,
    score: 49
  },
  {
    reps: 48,
    score: 50
  },
  {
    reps: 49,
    score: 51
  },
  {
    reps: 50,
    score: 51
  },
  {
    reps: 51,
    score: 52
  },
  {
    reps: 52,
    score: 53
  },
  {
    reps: 53,
    score: 54
  },
  {
    reps: 54,
    score: 54
  },
  {
    reps: 55,
    score: 55
  },
  {
    reps: 56,
    score: 56
  },
  {
    reps: 57,
    score: 56
  },
  {
    reps: 58,
    score: 57
  },
  {
    reps: 59,
    score: 58
  },
  {
    reps: 60,
    score: 59
  },
  {
    reps: 61,
    score: 59
  },
  {
    reps: 62,
    score: 60
  },
  {
    reps: 63,
    score: 61
  },
  {
    reps: 64,
    score: 61
  },
  {
    reps: 65,
    score: 62
  },
  {
    reps: 66,
    score: 63
  },
  {
    reps: 67,
    score: 64
  },
  {
    reps: 68,
    score: 64
  },
  {
    reps: 69,
    score: 65
  },
  {
    reps: 70,
    score: 66
  },
  {
    reps: 71,
    score: 66
  },
  {
    reps: 72,
    score: 67
  },
  {
    reps: 73,
    score: 68
  },
  {
    reps: 74,
    score: 69
  },
  {
    reps: 75,
    score: 69
  },
  {
    reps: 76,
    score: 70
  }
];
const MalePushups36to40MAX = 76;

//From 41 to 45
const MalePushups41to45 = [
  {
    reps: 30,
    score: 40
  },
  {
    reps: 31,
    score: 41
  },
  {
    reps: 32,
    score: 41
  },
  {
    reps: 33,
    score: 42
  },
  {
    reps: 34,
    score: 43
  },
  {
    reps: 35,
    score: 44
  },
  {
    reps: 36,
    score: 44
  },
  {
    reps: 37,
    score: 45
  },
  {
    reps: 38,
    score: 46
  },
  {
    reps: 39,
    score: 46
  },
  {
    reps: 40,
    score: 47
  },
  {
    reps: 41,
    score: 48
  },  
  {
    reps: 42,
    score: 49
  },
  {
    reps: 43,
    score: 49
  },
  {
    reps: 44,
    score: 50
  },
  {
    reps: 45,
    score: 51
  },
  {
    reps: 46,
    score: 51
  },
  {
    reps: 47,
    score: 52
  },
  {
    reps: 48,
    score: 53
  },
  {
    reps: 49,
    score: 54
  },
  {
    reps: 50,
    score: 54
  },
  {
    reps: 51,
    score: 55
  },
  {
    reps: 52,
    score: 56
  },
  {
    reps: 53,
    score: 56
  },
  {
    reps: 54,
    score: 57
  },
  {
    reps: 55,
    score: 58
  },
  {
    reps: 56,
    score: 59
  },
  {
    reps: 57,
    score: 59
  },
  {
    reps: 58,
    score: 60
  },
  {
    reps: 59,
    score: 61
  },
  {
    reps: 60,
    score: 61
  },
  {
    reps: 61,
    score: 62
  },
  {
    reps: 62,
    score: 63
  },
  {
    reps: 63,
    score: 64
  },
  {
    reps: 64,
    score: 64
  },
  {
    reps: 65,
    score: 65
  },
  {
    reps: 66,
    score: 66
  },
  {
    reps: 67,
    score: 66
  },
  {
    reps: 68,
    score: 67
  },
  {
    reps: 69,
    score: 68
  },
  {
    reps: 70,
    score: 69
  },
  {
    reps: 71,
    score: 69
  },
  {
    reps: 72,
    score: 70
  }
];
const MalePushups41to45MAX = 72;

//From 46 to 50
const MalePushups46to50 = [
  {
    reps: 25,
    score: 40
  },
  {
    reps: 26,
    score: 41
  },
  {
    reps: 27,
    score: 41
  },
  {
    reps: 28,
    score: 42
  },
  {
    reps: 29,
    score: 43
  },
  {
    reps: 30,
    score: 43
  },
  {
    reps: 31,
    score: 44
  },
  {
    reps: 32,
    score: 45
  },
  {
    reps: 33,
    score: 46
  },
  {
    reps: 34,
    score: 46
  },
  {
    reps: 35,
    score: 47
  },
  {
    reps: 36,
    score: 48
  },
  {
    reps: 37,
    score: 48
  },
  {
    reps: 38,
    score: 49
  },
  {
    reps: 39,
    score: 50
  },
  {
    reps: 40,
    score: 50
  },
  {
    reps: 41,
    score: 51
  },  
  {
    reps: 42,
    score: 52
  },
  {
    reps: 43,
    score: 53
  },
  {
    reps: 44,
    score: 53
  },
  {
    reps: 45,
    score: 54
  },
  {
    reps: 46,
    score: 55
  },
  {
    reps: 47,
    score: 55
  },
  {
    reps: 48,
    score: 56
  },
  {
    reps: 49,
    score: 57
  },
  {
    reps: 50,
    score: 57
  },
  {
    reps: 51,
    score: 58
  },
  {
    reps: 52,
    score: 59
  },
  {
    reps: 53,
    score: 60
  },
  {
    reps: 54,
    score: 60
  },
  {
    reps: 55,
    score: 61
  },
  {
    reps: 56,
    score: 62
  },
  {
    reps: 57,
    score: 62
  },
  {
    reps: 58,
    score: 63
  },
  {
    reps: 59,
    score: 64
  },
  {
    reps: 60,
    score: 64
  },
  {
    reps: 61,
    score: 65
  },
  {
    reps: 62,
    score: 66
  },
  {
    reps: 63,
    score: 67
  },
  {
    reps: 64,
    score: 67
  },
  {
    reps: 65,
    score: 68
  },
  {
    reps: 66,
    score: 69
  },
  {
    reps: 67,
    score: 69
  },
  {
    reps: 68,
    score: 70
  }
];
const MalePushups46to50MAX = 68;

//From 51 and Up
const MalePushups51 = [
  {
    reps: 20,
    score: 40
  },
  {
    reps: 21,
    score: 41
  },
  {
    reps: 22,
    score: 41
  },
  {
    reps: 23,
    score: 42
  },
  {
    reps: 24,
    score: 43
  },
  {
    reps: 25,
    score: 43
  },
  {
    reps: 26,
    score: 44
  },
  {
    reps: 27,
    score: 45
  },
  {
    reps: 28,
    score: 45
  },
  {
    reps: 29,
    score: 46
  },
  {
    reps: 30,
    score: 47
  },
  {
    reps: 31,
    score: 48
  },
  {
    reps: 32,
    score: 48
  },
  {
    reps: 33,
    score: 49
  },
  {
    reps: 34,
    score: 50
  },
  {
    reps: 35,
    score: 50
  },
  {
    reps: 36,
    score: 51
  },
  {
    reps: 37,
    score: 52
  },
  {
    reps: 38,
    score: 52
  },
  {
    reps: 39,
    score: 53
  },
  {
    reps: 40,
    score: 54
  },
  {
    reps: 41,
    score: 54
  },  
  {
    reps: 42,
    score: 55
  },
  {
    reps: 43,
    score: 56
  },
  {
    reps: 44,
    score: 56
  },
  {
    reps: 45,
    score: 57
  },
  {
    reps: 46,
    score: 58
  },
  {
    reps: 47,
    score: 58
  },
  {
    reps: 48,
    score: 59
  },
  {
    reps: 49,
    score: 60
  },
  {
    reps: 50,
    score: 60
  },
  {
    reps: 51,
    score: 61
  },
  {
    reps: 52,
    score: 62
  },
  {
    reps: 53,
    score: 63
  },
  {
    reps: 54,
    score: 63
  },
  {
    reps: 55,
    score: 64
  },
  {
    reps: 56,
    score: 65
  },
  {
    reps: 57,
    score: 65
  },
  {
    reps: 58,
    score: 66
  },
  {
    reps: 59,
    score: 67
  },
  {
    reps: 60,
    score: 67
  },
  {
    reps: 61,
    score: 68
  },
  {
    reps: 62,
    score: 69
  },
  {
    reps: 63,
    score: 69
  },
  {
    reps: 64,
    score: 70
  }
];
const MalePushups51MAX = 64;

//FEMALE PUSH UPS SCORING TABLE
//From 17 to 20
const FemalePushups17to20 = 
[
  { reps: 19, score: 40 }, { reps: 20, score: 41 },
  { reps: 21, score: 43 }, { reps: 22, score: 44 },
  { reps: 23, score: 45 }, { reps: 24, score: 47 },
  { reps: 25, score: 48 }, { reps: 26, score: 49 },
  { reps: 27, score: 50 }, { reps: 28, score: 52 },
  { reps: 29, score: 53 }, { reps: 30, score: 54 },
  { reps: 31, score: 56 }, { reps: 32, score: 57 },
  { reps: 33, score: 58 }, { reps: 34, score: 60 },
  { reps: 35, score: 61 }, { reps: 36, score: 62 },
  { reps: 37, score: 63 }, { reps: 38, score: 65 },
  { reps: 39, score: 66 }, { reps: 40, score: 67 },
  { reps: 41, score: 69 }, { reps: 41, score: 69 }
];
const FemalePushups17to20MAX = 42;

//From 21 to 25
const FemalePushups21to25 =
[
  { reps: 18, score: 40 }, { reps: 19, score: 41 },
  { reps: 20, score: 42 }, { reps: 21, score: 43 },
  { reps: 22, score: 44 }, { reps: 23, score: 45 },
  { reps: 24, score: 46 }, { reps: 25, score: 47 },
  { reps: 26, score: 48 }, { reps: 27, score: 49 },
  { reps: 28, score: 50 }, { reps: 29, score: 51 },
  { reps: 30, score: 52 }, { reps: 31, score: 53 },
  { reps: 32, score: 54 }, { reps: 33, score: 55 },
  { reps: 34, score: 56 }, { reps: 35, score: 57 },
  { reps: 36, score: 58 }, { reps: 37, score: 59 },
  { reps: 38, score: 60 }, { reps: 39, score: 61 },
  { reps: 40, score: 62 }, { reps: 41, score: 63 },
  { reps: 42, score: 64 }, { reps: 43, score: 65 },
  { reps: 44, score: 66 }, { reps: 45, score: 67 },
  { reps: 46, score: 68 }, { reps: 47, score: 69 },
  { reps: 48, score: 70 }
];
const FemalePushups21to25MAX = 48;

//From 26 to 30
const FemalePushups26to30 =
[
  { reps: 18, score: 40 }, { reps: 19, score: 41 },
  { reps: 20, score: 42 }, { reps: 21, score: 43 },
  { reps: 22, score: 44 }, { reps: 23, score: 45 },
  { reps: 24, score: 46 }, { reps: 25, score: 47 },
  { reps: 26, score: 48 }, { reps: 27, score: 48 },
  { reps: 28, score: 49 }, { reps: 29, score: 50 },
  { reps: 30, score: 51 }, { reps: 31, score: 52 },
  { reps: 32, score: 53 }, { reps: 33, score: 54 },
  { reps: 34, score: 55 }, { reps: 35, score: 56 },
  { reps: 36, score: 57 }, { reps: 37, score: 58 },
  { reps: 38, score: 59 }, { reps: 39, score: 60 },
  { reps: 40, score: 61 }, { reps: 41, score: 62 },
  { reps: 42, score: 63 }, { reps: 43, score: 63 },
  { reps: 44, score: 64 }, { reps: 45, score: 65 },
  { reps: 46, score: 66 }, { reps: 47, score: 67 },
  { reps: 48, score: 68 }, { reps: 49, score: 69 },
  { reps: 50, score: 70 }
];
const FemalePushups26to30MAX = 50;

//From 31 to 35
const FemalePushups31to35 = 
[
  { reps: 16, score: 40 }, { reps: 17, score: 41 },
  { reps: 18, score: 42 }, { reps: 19, score: 43 },
  { reps: 20, score: 44 }, { reps: 21, score: 45 },
  { reps: 22, score: 46 }, { reps: 23, score: 47 },
  { reps: 24, score: 48 }, { reps: 25, score: 49 },
  { reps: 26, score: 50 }, { reps: 27, score: 51 },
  { reps: 28, score: 52 }, { reps: 29, score: 53 },
  { reps: 30, score: 54 }, { reps: 31, score: 55 },
  { reps: 32, score: 56 }, { reps: 33, score: 57 },
  { reps: 34, score: 58 }, { reps: 35, score: 59 },
  { reps: 36, score: 60 }, { reps: 37, score: 61 },
  { reps: 38, score: 62 }, { reps: 39, score: 63 },
  { reps: 40, score: 64 }, { reps: 41, score: 65 },
  { reps: 42, score: 66 }, { reps: 43, score: 67 },
  { reps: 44, score: 68 }, { reps: 45, score: 69 },
  { reps: 46, score: 70 }
];
const FemalePushups31to35MAX = 46;

//From 36 to 40
const FemalePushups36to40 =
[
  { reps: 14, score: 40 }, { reps: 15, score: 41 },
  { reps: 16, score: 42 }, { reps: 17, score: 43 },
  { reps: 18, score: 44 }, { reps: 19, score: 45 },
  { reps: 20, score: 46 }, { reps: 21, score: 47 },
  { reps: 22, score: 48 }, { reps: 23, score: 49 },
  { reps: 24, score: 50 }, { reps: 25, score: 51 },
  { reps: 26, score: 52 }, { reps: 27, score: 53 },
  { reps: 28, score: 54 }, { reps: 29, score: 56 },
  { reps: 30, score: 57 }, { reps: 31, score: 58 },
  { reps: 32, score: 59 }, { reps: 33, score: 60 },
  { reps: 34, score: 61 }, { reps: 35, score: 62 },
  { reps: 36, score: 63 }, { reps: 37, score: 64 },
  { reps: 38, score: 65 }, { reps: 39, score: 66 },
  { reps: 40, score: 67 }, { reps: 41, score: 68 },
  { reps: 42, score: 69 }, { reps: 43, score: 70 }
];
const FemalePushups36to40MAX = 43;

//From 41 to 45
const FemalePushups41to45 =
[
  { reps: 12, score: 40 }, { reps: 13, score: 41 },
  { reps: 14, score: 42 }, { reps: 15, score: 43 },
  { reps: 16, score: 44 }, { reps: 17, score: 45 },
  { reps: 18, score: 46 }, { reps: 19, score: 47 },
  { reps: 20, score: 48 }, { reps: 21, score: 49 },
  { reps: 22, score: 50 }, { reps: 23, score: 51 },
  { reps: 24, score: 52 }, { reps: 25, score: 53 },
  { reps: 26, score: 54 }, { reps: 27, score: 56 },
  { reps: 28, score: 57 }, { reps: 29, score: 58 },
  { reps: 30, score: 59 }, { reps: 31, score: 60 },
  { reps: 32, score: 61 }, { reps: 33, score: 62 },
  { reps: 34, score: 63 }, { reps: 35, score: 64 },
  { reps: 36, score: 65 }, { reps: 37, score: 66 },
  { reps: 38, score: 67 }, { reps: 39, score: 68 },
  { reps: 40, score: 69 }, { reps: 41, score: 70 }
];
const FemalePushups41to45MAX = 41;

//From 46 to 50
const FemalePushups46to50 =
[
  { reps: 11, score: 40 }, { reps: 12, score: 41 },
  { reps: 13, score: 42 }, { reps: 14, score: 43 },
  { reps: 15, score: 44 }, { reps: 16, score: 45 },
  { reps: 17, score: 46 }, { reps: 18, score: 47 },
  { reps: 19, score: 48 }, { reps: 20, score: 49 },
  { reps: 21, score: 50 }, { reps: 22, score: 51 },
  { reps: 23, score: 52 }, { reps: 24, score: 53 },
  { reps: 25, score: 54 }, { reps: 26, score: 56 },
  { reps: 27, score: 57 }, { reps: 28, score: 58 },
  { reps: 29, score: 59 }, { reps: 30, score: 60 },
  { reps: 31, score: 61 }, { reps: 32, score: 62 },
  { reps: 33, score: 63 }, { reps: 34, score: 64 },
  { reps: 35, score: 65 }, { reps: 36, score: 66 },
  { reps: 37, score: 67 }, { reps: 38, score: 68 },
  { reps: 39, score: 69 }, { reps: 40, score: 70 }
];
const FemalePushups46to50MAX = 40;

//From 51 and Up
const FemalePushups51 =
[
  { reps: 10, score: 40 }, { reps: 11, score: 41 },
  { reps: 12, score: 42 }, { reps: 13, score: 43 },
  { reps: 14, score: 44 }, { reps: 15, score: 45 },
  { reps: 16, score: 46 }, { reps: 17, score: 48 },
  { reps: 18, score: 49 }, { reps: 19, score: 50 },
  { reps: 20, score: 51 }, { reps: 21, score: 52 },
  { reps: 22, score: 53 }, { reps: 23, score: 54 },
  { reps: 24, score: 55 }, { reps: 25, score: 56 },
  { reps: 26, score: 57 }, { reps: 27, score: 58 },
  { reps: 28, score: 59 }, { reps: 29, score: 60 },
  { reps: 30, score: 61 }, { reps: 31, score: 63 },
  { reps: 32, score: 64 }, { reps: 33, score: 65 },
  { reps: 34, score: 66 }, { reps: 35, score: 67 },
  { reps: 36, score: 68 }, { reps: 37, score: 69 },
  { reps: 38, score: 70 }
];
const FemalePushups51MAX = 38;

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
          if(age >= 21 && age <= 25) {
            const getScore = FemalePullups21to25.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups21to25MAX) setPpScore(100);
            else setPpScore(0);
          }
          if(age >= 26 && age <= 30) {
            const getScore = FemalePullups26to30.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups26to30MAX) setPpScore(100);
            else setPpScore(0);
          }
          if(age >= 31 && age <= 35) {
            const getScore = FemalePullups31to35.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups31to35MAX) setPpScore(100);
            else setPpScore(0);
          }
          if(age >= 36 && age <= 40) {
            const getScore = FemalePullups36to40.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups36to40MAX) setPpScore(100);
            else setPpScore(0);
          }
          if(age >= 41 && age <= 45) {
            const getScore = FemalePullups41to45.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups41to45MAX) setPpScore(100);
            else setPpScore(0);
          }
          if(age >= 46 && age <= 50) {
            const getScore = FemalePullups46to50.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups46to50MAX) setPpScore(100);
            else setPpScore(0);
          }
          if(age >= 51) {
            const getScore = FemalePullups51.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePullups51MAX) setPpScore(100);
            else setPpScore(0);
          }
        }
      }
      else {
        //MALE DOING PUSH-UPS
        if(isMale) {
          if(age >= 17 && age <= 20) {
            const getScore = MalePushups17to20.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups17to20MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 21 && age <= 25) {
            const getScore = MalePushups21to25.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups21to25MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 26 && age <= 30) {
            const getScore = MalePushups26to30.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups26to30MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 31 && age <= 35) {
            const getScore = MalePushups31to35.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups31to35MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 36 && age <= 40) {
            const getScore = MalePushups36to40.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups36to40MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 41 && age <= 45) {
            const getScore = MalePushups41to45.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups41to45MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 46 && age <= 50) {
            const getScore = MalePushups46to50.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups46to50MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 51) {
            const getScore = MalePushups51.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= MalePushups51MAX) setPpScore(70);
            else setPpScore(0);
          }
        }

        //FEMALE DOING PUSH-UPS
        else {
          if(age >= 17 && age <= 20) {
            const getScore = FemalePushups17to20.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups17to20MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 21 && age <= 25) {
            const getScore = FemalePushups21to25.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups21to25MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 26 && age <= 30) {
            const getScore = FemalePushups26to30.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups26to30MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 31 && age <= 35) {
            const getScore = FemalePushups31to35.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups31to35MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 36 && age <= 40) {
            const getScore = FemalePushups36to40.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups36to40MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 41 && age <= 45) {
            const getScore = FemalePushups41to45.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups41to45MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 46 && age <= 50) {
            const getScore = FemalePushups46to50.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups46to50MAX) setPpScore(70);
            else setPpScore(0);
          }
          else if(age >= 51) {
            const getScore = FemalePushups51.find((score) => score.reps == reps);
            if(getScore) setPpScore(getScore.score);
            else if(reps >= FemalePushups51MAX) setPpScore(70);
            else setPpScore(0);
          }
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