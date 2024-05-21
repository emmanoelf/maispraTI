const data = [
    [71, 40, 89, 58, 98, 73, 93, 54, 33, 83, 64, 35, 17, 71, 33, 23, 68, 58, 62, 46, 67, 88, 66, 80, 75],
    [33, 47, 78,  2, 43, 25, 24, 30, 49,  0, 24, 19,  8, 11, 74, 77,  8, 58, 24,  9, 39, 97, 74,  4, 84],
    [82, 85,  4, 50, 66, 97, 99, 43, 94, 29, 98, 70,  8, 52,  7, 62, 78, 12, 38, 94, 43, 76, 34, 54,  8],
    [54, 30, 87, 35, 28, 75, 54, 81, 55, 13, 21, 57, 83, 17, 75, 36, 85, 50,  0, 60, 52, 51, 67, 18, 75],
    [54,  1, 95, 28, 19, 64, 17, 17, 85, 53, 77, 78, 28, 90, 54,  4, 84,  2,  4, 89, 92, 81, 94, 85, 21],
    [39, 84, 66, 13,  7, 82, 16,  2, 40, 62, 58, 90, 49,  2,  5, 75, 81, 68, 89,  4, 14, 64, 42, 17, 54],
    [17, 33, 45, 26, 40, 95, 54, 81, 25, 19, 35, 51, 17, 41, 27, 53,  1, 22, 50, 59, 87, 73, 29, 50, 75],
    [11, 25, 37, 77, 92, 15, 89, 40, 63, 85, 49, 45, 46, 80, 54,  1, 46, 94, 43, 74, 89, 15, 95, 25, 59],
    [7,  80, 21, 43,  5, 18, 18, 58, 88, 10, 74,  1, 64, 56, 24, 35, 16, 100,46, 68, 72,  2, 22, 38, 13],
    [46, 82, 84, 86, 43, 73, 97, 93, 73, 27,  3, 92, 30, 87, 73, 52, 36, 95,  8, 39, 46, 82, 17, 79,  6],
    [86, 58, 96,  8,  6, 92, 43, 39, 40, 40, 46,100, 72, 42, 18, 88,  4, 65, 66, 94, 51, 35, 63,  1,  1],
    [95, 26, 10,  9, 56, 69,  1, 98, 93, 35, 83, 24, 53,  4, 74, 16, 82, 70, 61, 34, 12, 60, 44, 68, 87],
    [76, 87, 16, 93, 78, 41, 96, 38, 89, 66, 13, 27, 44, 48, 88, 13, 73, 90, 18, 46, 62, 57, 47, 84, 89],
    [54, 61, 76, 42, 12, 99, 36, 77, 60, 59, 28, 35, 68, 26, 55, 99, 23, 43, 17, 45, 51,  6, 70, 31, 16],
    [83, 56, 36, 59, 20, 84, 48,  3, 86, 90, 56, 91, 100,68, 77, 79, 75, 44, 40, 33, 72, 94, 70, 88, 79]
  ];

const exercise_24 = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, 3, 4, 5, -6, 7, 8],
    [1, -2, 3, 4, 5, -6, -7, 8],
    [-3, -2, 3, 4, 5, 6, -7, -8],
    [1, -2, -3, 4, -5, 6, -7, 8],
    [-5, -2, 3, 4, 5, -6, 7, -8],
];

const exercise_26_a = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
];

const exercise_26_b = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
    [13,14,15]
];

const exercise_27 = [
    [1,2,3,4,5,6],
    [14,25,73,49,59,36],
    [14,62,23,41,55,61],
    [10,20,31,42,53,64],
    [0,12,33,74,95,96],
    [91,52,23,74,75,76],
];

const exercise_28 = [
  [1,2,3,4,5,6,7,8,9,10],
  [13,42,35,46,57,86,79,82,19,120],
  [13,12,23,44,55,66,77,88,99,190],
  [11,32,53,64,58,86,77,87,97,10],
  [14,25,36,41,52,63,47,58,79,16],
  [13,12,32,43,56,76,77,58,49,30],
  [11,12,23,24,25,26,27,28,29,20],
  [13,32,33,34,35,36,37,83,93,10],
  [41,82,38,45,52,6,77,68,9,10],
  [81,32,3,44,5,6,74,8,98,10],
];

const exercise_29 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

const exercise_30 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]
];

let exercise_31 = [
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
];

let exercise_33 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

let exercise_32 = [
  [
    [29, 30, 26, 16, 18, 26, 14, 20, 26, 12, 15,  8, 6],
    [9, 12, 14, 24, 30,  6, 30, 23, 17, 16,  2, 15, 7],
    [15, 22, 29, 4,  2, 29, 24, 22, 30, 4, 27,  7, 11],
    [16, 13, 19, 18, 9, 21, 23,  7,  6, 26, 4, 29, 3],
    [14, 6, 13, 3,  1, 28, 6, 9,  5, 6, 20,  8, 16],
    [15,  1, 22, 16, 24,  7, 16, 17, 19, 22, 25, 25, 8],
    [20, 23,  2, 16, 21, 16, 27,  1, 17, 29, 28, 12, 28],
    [21, 24, 13, 15, 17,  1, 30,  6, 29, 23, 26, 12, 28],
    [3, 27, 18, 29,  5, 13, 5, 18, 19,  9, 22, 21, 25],
    [13,  1, 26, 14, 21, 23, 3, 11, 15, 20,  2, 24, 1],
    [18, 9, 30, 14,  9, 16, 22, 5,  1, 26, 24, 12, 8],
    [7, 7, 13, 26,  6, 11, 18, 2,  1,  8, 23, 14, 11]
  ]
];

let exercise_34 = [
  [25,  7,  5, 25, 27, 14,  3,  7,  7,  5,  1, 6, 12, 15, 21, 28, 25, 28, 13, 17, 25, 12, 30, 13,  8, 29, 19,  2, 22, 23, 18,  8,  2, 1, 16, 29, 11, 27, 17, 20,  6, 15, 13, 26, 12, 28, 20,  6, 21,  2],
  [6,  3, 17, 27, 12, 12, 20, 12, 10, 25, 26, 20, 29, 11, 4, 13, 25, 19, 18, 19, 26, 13, 18,  8, 19, 30,  9, 14, 30, 11, 10, 29, 11, 15, 22,  2, 13,  1, 27, 28,  8, 19, 15, 30, 19, 12,  1, 17,  9,  5],
  [14,  7,  6, 29,  1, 25, 19, 15, 28, 27, 24, 29, 24, 22,  1,  6, 15,  5, 15, 17, 15, 14, 8, 23, 29, 22, 15, 30, 11,  2, 13, 20, 27, 9, 23, 17, 19,  5,  8,  5,  8, 16,  5, 29, 15, 11, 17, 30, 18, 14],
  [2, 28, 15, 29, 11, 12, 11,  7, 21, 18, 23, 9,  4, 13, 10, 26, 16,  7,  4, 14, 29, 19, 24,  6,  4, 29, 24, 15, 15, 24, 23,  2,  3, 18, 27, 25, 21,  5, 19, 12, 27, 27, 12, 16, 7, 15,  1,  3, 15, 29],
  [17, 12,  2,  6,  5, 26, 26,  5, 25, 30, 18, 8, 28, 23, 15, 25,  2,  8, 10, 15, 21, 22, 30,  7, 27,  7, 30,  7, 23, 10, 23, 14,  4, 5,  6,  3, 14, 15, 11, 13, 17,  5,  5, 30, 10, 19,  2, 12, 23,  1],
  [17,  9, 30, 29, 19, 14,  6,  5, 24, 17, 14, 17, 13,  3, 13, 19,  9, 21,  7, 25, 14, 21, 10,  7, 24,  6, 23, 15, 20, 25,  1,  2, 28, 4,  9, 17,  9,  9, 19, 21, 14, 30, 23, 13, 20,  1, 20,  6, 30,  9],
  [5, 19, 24, 22, 23,  7, 21, 28, 20, 27, 10, 23, 11, 23, 27,  2, 18, 13, 22, 29, 27, 10, 26, 11, 28, 22,  3,  4, 11,  6,  7, 21, 18, 11, 26, 24, 28,  9, 18, 21,  3, 30, 23, 20, 2, 17, 21,  4, 30,  5],
  [13, 12,  5,  4, 13,  7, 11,  1, 7, 21,  6, 16, 16, 27, 23, 16,  7, 13, 25, 2,  2,  1, 18, 23, 26, 14, 10,  7, 14, 12, 2, 12,  7, 26, 24, 17,  6, 21,  6,  6, 27, 8, 11, 27, 9, 21, 21, 20, 10, 16],
  [10, 27, 18,  2,  6,  3,  2, 29, 20, 16, 16, 6,  5, 22, 13, 17, 18,  5, 13, 19, 15, 22, 9, 22, 12, 21, 13, 30, 23, 10, 23,  1,  7, 19, 16, 11,  2,  5, 27, 17, 17,  7, 14, 21, 2, 29, 16,  5,  7, 17],
  [12, 17, 16,  7, 16,  6, 23, 25, 15,  4, 16, 19, 26, 29, 10,  1, 29, 22, 25,  2, 29,  1, 18, 19,  2,  5, 25, 17,  7, 29,  3,  6,  8, 7,  7,  2,  1, 12, 27, 23, 21, 30, 13,  1, 16, 15, 23, 21,  1, 23],
  [29, 14, 15,  2, 13, 21, 13, 27, 12,  4, 15, 23,  5,  8, 15, 22, 19, 28,  8, 21, 23, 21, 25, 30,  1, 15,  4, 24, 10, 17,  6, 12,  7, 2,  2,  9,  6, 16,  6, 18,  6,  4,  2,  1, 20, 18, 18, 30,  9,  8],
  [20, 15,  4,  4,  3, 20,  8,  1, 28,  7, 29, 28,  1, 24, 11, 29,  8, 19, 17, 27, 30,  8, 6, 20, 18, 27, 18, 16,  4, 19, 14, 23, 18, 6,  1,  3, 16, 15, 22,  1, 19,  5, 24, 28, 15, 15,  8,  8, 30, 11 ],
  [3, 25, 21,  7,  5, 23, 27, 24,  1, 26, 13, 10, 22,  5,  8, 25,  3,  8, 22, 17,  6, 13, 26, 30, 22, 29,  9,  1, 21,  8, 27, 25, 11, 3, 20,  3, 24, 22,  6,  3,  6, 26, 18,  1, 28, 26,  2, 23,  9, 20],
  [12, 19,  8, 23, 15,  3,  4, 10, 6,  4, 19, 10,  3, 11, 29,  9, 12, 24, 10, 8, 19, 12, 2,  9, 25, 25, 15,  1, 17,  4, 5, 27, 29, 15, 13, 19,  8, 26, 17, 20, 29, 1, 28, 17, 6,  9, 10,  6, 27,  3],
  [20, 29, 28, 28, 25, 22, 17, 29, 30,  6, 26, 3, 30,  9, 21, 11, 28,  1, 15, 29, 24, 16, 24, 14,  2,  6,  5, 20,  7, 26, 14, 29, 29, 18, 19, 16, 28, 30, 29, 25,  8,  8, 12,  9, 18, 21,  7,  8, 23, 21],
  [13,  3,  5, 21, 18, 27, 23, 25, 14, 15,  2, 9,  2,  6, 19,  2, 10, 20, 16, 16, 26, 12, 12, 30, 13, 10,  2,  5, 28, 22, 12, 23,  4, 19, 16,  8, 18,  1, 26,  2, 10,  8, 10,  5, 10,  8, 24, 16,  3,  7],
  [20, 30,  9, 27, 29,  3, 10,  1, 28, 24, 30, 5, 25, 30, 23, 17, 29, 29,  3, 30, 22, 19, 24, 19,  6, 12,  7,  9,  4, 14, 24, 22, 30, 10,  8, 30,  4, 19, 28, 28, 14, 19,  7,  4, 14,  3, 10, 11, 20, 21],
  [20, 19, 14, 29, 26, 10, 13,  5, 27, 22,  7, 10, 18, 18, 26, 29, 15, 22,  9, 22, 11, 16, 1, 28, 17, 22, 13, 29, 23,  6, 27, 22, 14, 20,  9, 22, 25, 11, 21, 24, 27,  3, 18, 22, 27, 28,  6, 17,  4, 12],
  [15, 21,  9, 19, 25, 15, 23, 11, 13, 19, 15, 5, 12, 28,  3, 24,  1,  5, 12, 22, 25, 25, 20, 21, 26, 27, 23, 29, 14, 15, 26, 28, 21, 6, 14, 26, 24, 13, 13, 10, 20,  7, 19, 23, 20,  9, 18,  6, 21, 30 ],
  [13, 28, 20,  3,  9, 26,  9, 11, 19,  9, 19, 3, 10, 12,  5,  6, 26,  5,  3,  8, 11, 18, 5, 16, 29, 20, 11,  4, 13, 25, 24,  2, 23, 1, 30, 30, 27, 10, 16, 21, 30, 26, 11,  8, 4, 10, 20, 27, 23,  7],
  [23,  5, 29, 20,  2,  7,  5, 13, 14, 23, 22, 5,  8, 13, 16, 20, 16, 24, 11, 12,  2, 15, 11, 16, 23, 13, 10,  6, 22, 11,  7,  7, 24, 9, 26, 20, 18, 18, 11, 13, 11, 27,  2, 25, 13, 26, 16, 18, 21, 16],
  [22,  8,  4, 10,  3, 25,  5, 24, 9, 30, 19, 25,  3,  1, 13,  6, 18, 19,  1, 2,  2,  6, 8, 30, 22, 10, 14, 26,  5, 13, 5, 15, 10, 22, 25, 17,  4, 15, 10, 20,  7, 8, 24, 12, 24, 29, 10, 22, 16, 14],
  [8, 20, 20,  8, 23,  5, 17, 17,  9, 23, 27, 11, 28, 14, 23,  9, 26,  7, 29, 15,  4, 26, 18, 21, 26, 12, 26, 18, 28,  8, 30, 27,  5, 17, 16,  6, 16, 15, 29,  1, 13, 12, 18,  1, 20, 27, 11, 10, 12, 24],
  [11,  8, 16,  3,  1,  9, 16,  9, 28,  2, 13, 11,  5, 29,  9, 11,  8,  6, 26,  1, 24, 17, 26,  8, 28, 25, 10,  9,  5, 27, 18,  7, 19, 25, 23,  4,  4, 21, 12, 29, 11, 25,  8, 11, 15, 10, 20,  7, 12,  3],
  [26, 13, 16,  3, 24, 21, 29,  7, 27, 14, 11,14, 26,  9, 18,  4,  9, 15, 25,  8, 24, 26, 25, 16, 19,  7, 23, 28,  5, 17, 23,  9,  5, 11,  3, 11,  4, 18, 26,  3, 22, 17,  7, 26, 10, 11,  4,  1, 19, 14],
  [20, 24, 19, 15, 22, 26, 27, 29,  2, 15, 5, 23, 10,  8, 17, 18, 20, 29, 17, 13,  1, 7, 21,  1,  4,  8,  7, 25,  5, 22,  3, 12, 8, 13, 13, 26,  7, 30, 19, 26,  6, 16, 27, 7, 16, 11,  6, 30, 27, 18],
  [4, 13,  6, 28, 19, 29, 29, 30,  1,  6, 30,19, 14,  5, 20,  3, 29,  5,  5, 15, 21, 23, 8,  2, 15, 13, 10, 20, 24,  4,  5, 28,  2,18, 30, 12, 25, 17, 19, 18, 12, 12,  6, 21, 22,  1, 21, 29, 24,  8],
  [18,  7, 28,  8,  3,  9, 20, 30, 17, 11, 29,18,  8,  7,  8, 11, 27, 16, 14, 14, 19,  5,12, 29, 12,  2, 21, 12, 26, 28,  4,  9, 29, 2, 27,  6, 30, 27, 20, 10,  8,  3, 19, 27, 9,  2, 20,  9, 13, 12],
  [27, 12, 22,  6,  3, 26, 18, 15,  8,  4, 13, 2, 20,  4, 23, 21, 27,  5, 18, 11, 16, 16,23,  9,  3,  9, 18, 25,  1, 11,  1,  3, 13, 3, 30,  5, 25, 26,  3, 29, 20, 17, 27,  9, 1, 13, 16, 24,  9, 15],
  [ 9, 18, 27, 17,  2,  5,  9,  2,  8,  8, 29, 5,  7, 25,  9,  6, 15, 17, 12,  1,  5, 10,20,  5, 16,  2,  6,  3, 11, 10, 24, 23, 27, 2, 24,  9, 15,  9, 18, 25, 19,  1, 26, 27,19, 26, 11, 13, 22, 13],
  [12, 29, 18,  4,  5, 22, 12, 24, 16, 29, 16,14,  7,  8, 23, 26, 27, 28, 17,  9, 29, 17, 4,  5,  4,  3,  4, 15, 14, 10, 16,  9,  1,12, 20, 29, 10, 11, 22, 22, 14, 22, 25,  8,20,  7, 28,  3,  6, 23],
  [ 6,  4,  9, 10, 15,  6,  1, 12, 25, 19, 17, 9,  9,  4, 11, 18,  2, 12, 30,  6, 29, 28,18, 17,  4, 24, 27,  1, 16,  2,  6, 11,  1, 7, 11, 27, 11, 30,  4,  4, 11,  6, 21, 21, 9, 27,  5, 15, 26, 10],
  [ 8, 27, 12, 30, 19,  9,  5,  3, 21, 21, 14,23,  7, 18, 17, 12, 17, 19,  6,  2, 11, 19,30, 18,  3, 27,  3, 21, 24, 14, 28, 27, 28, 9,  8, 22, 25, 17, 14, 29, 23, 24, 22,  6, 9,  2, 26, 24, 28,  3],
  [24, 22, 10, 12, 24, 18,  4, 17, 14, 14, 17,24, 21, 24, 21,  2,  9, 20, 30,  9, 23,  5,14,  9, 17,  6, 30, 27, 30,  8, 15,  5, 26,22,  3, 12, 25, 19, 17, 25, 21,  1,  1,  9, 8, 24, 30,  3,  8,  5],
  [20, 13, 16, 13, 14, 30, 19,  1, 15, 19, 27,30, 29, 26, 18, 14, 29, 20, 11, 14, 11,  6, 9,  5, 23, 25, 20, 24, 17, 19, 24, 15, 15,30,  8, 27, 13,  8, 21, 30, 29, 22,  7, 16,28, 25, 21, 23, 14, 30],
  [ 7, 12, 16, 27, 28, 17,  4, 18,  7, 10, 16,22,  3,  4, 24, 20, 20, 25,  1,  9, 22, 23,11,  1, 17, 12,  6, 19, 21, 12, 29, 25, 12,16, 24, 11,  6, 17, 30, 26, 28, 17, 11, 29,14, 23, 16,  8, 11, 25],
  [ 9, 15,  9, 25,  6, 21, 18, 11,  6, 22, 22, 2,  8, 19, 10,  2, 19, 21,  7, 26,  5,  3,10,  8,  5, 18, 25, 21, 17, 25, 10, 21, 20,29, 11,  3,  2, 12,  2,  9, 18, 28, 22, 17,13, 27,  1,  6, 23, 29],
  [ 6, 20, 22,  5, 26, 17,  9,  4, 8, 10, 19,18,  8, 30, 30, 10, 19, 24,  7, 5, 19, 25,28, 29, 27, 10, 13, 25, 11, 15, 8, 28, 12, 5, 19, 27, 30, 25, 22, 10, 15, 3,  5,  2, 3, 13, 27, 25,  1, 21],
  [11, 30,  6,  5, 9, 14,  9, 14, 15, 25, 27,26, 21, 22, 19, 7,  6, 11, 15,  1,  7, 29, 9, 29, 30, 14, 1, 17,  2,  4, 30, 14, 17, 1, 27, 11, 17, 8, 30, 19, 19, 10, 29, 27,11, 12,  3, 18, 5, 23],
  [20, 29, 23, 10, 17, 24, 13, 23, 23,  8, 30, 1, 16, 30, 26,  1, 11, 17,  6, 25, 26, 28,10,  2, 30, 22, 11,  8,  7, 30, 23, 20, 14,14, 20, 19, 10,  9,  9,  3, 17, 22, 20, 17,13, 12, 16, 14, 15, 21],
  [27, 14, 12, 22, 26,  5, 15,  9, 18, 26, 11,29, 20, 15, 10, 21,  6, 24, 14,  2,  2,  9,30,  3, 21,  2,  4, 25, 11, 30, 30, 28,  1,19,  3, 29, 17, 28,  2,  4,  1, 23, 12, 16,20, 17, 10, 10, 22, 27],
  [18,  1,  2, 30, 25, 25, 28, 12,  9,  7, 29,19, 19, 10, 21, 21,  8, 16, 24,  7, 29,  1,23, 24, 15,  3, 10, 28, 19, 27, 29, 26,  5,11, 14, 15, 29, 24, 21, 28, 16,  2,  3, 25,28, 11, 27, 21, 25, 25],
  [ 3, 13,  1,  8, 29, 15,  7, 25,  3,  4, 10,10, 21, 19, 11, 15, 17, 16, 19,  1, 28, 26,29,  5, 27, 26, 11, 11,  4, 28,  4,  7, 12,16, 14, 29, 17, 13, 26, 26, 19, 25,  2, 17, 4, 10, 11, 19,  3, 23],
  [19, 27,  5,  6, 11, 18, 24, 30,  1,  9,  6,28,  3, 22, 24,  6, 28, 29, 27,  9, 11,  4,20, 13,  5, 27, 15, 17,  3, 30, 22, 28, 26, 7,  5, 22, 23,  7,  4, 17, 11, 13,  6, 29, 2, 24,  9, 16,  5, 19],
  [ 3, 11, 14, 17,  8, 29,  8, 29, 27, 17,  8,21, 18, 12,  8, 14, 21, 29, 11,  2,  3,  4, 3, 25, 27, 18, 17, 20, 29,  5, 27, 14, 19, 5, 21, 25, 25, 17, 26, 18, 26, 16,  3, 25,29, 20, 30, 14, 16,  1],
  [ 6, 28, 30, 14, 26, 12, 26,  4, 26,  4, 20,24, 24, 28, 26,  5,  6, 17, 17, 22,  7, 12, 6,  3,  3, 16, 12,  6,  8,  5, 13, 30, 19, 4,  4, 22,  7, 16,  7,  2, 21, 25, 24, 17,21, 22, 30, 14, 10, 17],
  [20, 28, 13, 20, 24,  9, 13, 17, 25, 24, 30, 9, 15,  5, 18, 30, 25, 25, 28,  3, 27,  6, 1,  9, 28, 29, 11, 29,  7, 11, 29,  1,  8,26,  3, 22, 19,  4, 26, 16, 13,  6, 21,  9,21, 15, 11,  3, 14,  9],
  [ 3,  4, 21, 13, 20, 30,  4, 29, 17, 25, 17,20, 24, 17, 16, 16, 22, 18, 20, 23, 29,  5, 1, 14, 27, 22, 14, 24,  4, 19, 29, 19, 28,23,  2,  2,  5,  1,  7, 27, 25,  4,  4, 17,24, 26, 23, 24, 15, 14],
  [ 4, 22, 12, 25,  4, 21,  8, 29, 28, 28, 14,16, 28, 21, 12,  8, 10, 14, 18, 22, 12, 14,26, 16, 25,  7, 27,  1, 23, 20,  5, 29,  2,10, 12, 30, 10, 13, 11, 12, 18, 15, 28, 17,18,  3, 27,  3,  9,  1],
  [11, 22, 22,  4,  1,  4, 26, 13, 26, 12, 24,20, 30,  7, 16, 30,  5,  8, 10, 11, 17,  5,29, 20, 17, 26, 30,  8, 26, 27,  9, 28, 18,25, 20, 30, 12,  6, 24, 26,  9, 20, 14, 10,21,  6, 20, 17,  9, 18]
]  

module.exports = {data, exercise_24, exercise_26_a, exercise_26_b, exercise_27, exercise_28, exercise_29, exercise_30, exercise_31, exercise_33, exercise_32, exercise_34};