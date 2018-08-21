// Data was randomly generated and saved for future use
const RandSc =
[ 52,  1, 11,  5, 22, 41,  2,  3, 25, 32,  8, 36, 56,  6, 51, 33,
  50, 54,  6, 48,  5, 18, 10, 16, 13, 17, 14, 56,  4, 56, 39,  5,
   5, 34, 36, 48, 45, 26, 28, 45,  5,  9, 58,  3, 53, 17, 10, 50,
  45, 38, 50, 10, 26, 49, 47, 41,  0,  3, 43,  5, 55, 43, 49, 28
];

const RandMn =
[ 27, 53, 44,  8, 40, 12, 49, 53, 53, 26, 50, 42,  2, 37, 49, 55,
   1, 45,  9, 38,  4, 25, 53, 44, 40, 19,  1, 22, 46, 56, 29,  4,
  14, 49, 23, 52, 19, 44, 22, 56, 16, 45,  0, 11,  7, 10, 22,  4,
  44, 13, 32, 37, 17, 52, 49, 60, 30,  9, 29, 46, 29,  6,  3, 34
];

const RandHr =
[  4, 13, 15, 23,  3, 10, 11, 16,  1,  4, 23, 12,  7, 21,  2, 10,
  15,  5,  4, 12,  2,  5, 13, 12, 21, 17, 22,  1,  0,  7, 17, 14,
  23,  8, 17,  4,  1, 20, 23, 16,  7,  2, 17,  3, 19, 14,  9, 21,
  13, 19,  0,  2, 17,  9, 20, 20,  0, 16, 14, 20,  9, 18,  1,  0
];

const RandDa =
[ 360, 157, 221, 250, 315, 110,  21, 355, 119, 169, 143, 264,  63, 179, 315, 282,
  334, 301, 203, 200, 277,  66, 119, 180, 116,   6, 327, 266, 250, 182, 225,  54,
   29,  38, 295, 141, 200, 276, 208, 291, 161,  42,   4, 263,  16,  16, 206,  68,
   44, 262,  57, 200,  98, 280, 193,  88,  86,  87,  99, 163,  32, 206, 139, 354
 ];


// incrementor for each array
// of random numbers
let i_sc = 0;
let i_mn = 0;
let i_hr = 0;
let i_da = 0;

/*
 * This JS utility provides numbers to the Timer component for
 * the sec/min/hr. Its existence is unfortunate but necessary
 * to maintain the quality of the user experience at _warp10 speed.
 */
const Rand = {
  sec() {
    let second = RandSc[i_sc];
    i_sc = (i_sc + 1) % RandSc.length;
    return second;
  },
  min() {
    let minute = RandMn[i_mn];
    i_mn = (i_mn + 1) % RandMn.length;
    return minute;
  },
  hr() {
    let hour = RandHr[i_hr];
    i_hr = (i_hr + 1) % RandHr.length;
    return hour;
  },
  day() {
    let day = RandDa[i_da];
    i_da = (i_da + 1) % RandDa.length;
    return day;
  }
};

export default Rand;
