// student score , total possible score
// 15/20 -> you got a C (75%)!
// A 90-100 ,B 80-89 ,C 70-79 ,D 60-69 ,F 0-59

let gradeCalc = function (score, totalScore) {
  let percent = (score / totalScore) * 100;
  let letterGrade = '';

  if (percent >= 90) {
    letterGrade = 'A';
    // return `you got a A (${percent}%)!`;
  } else if (percent >= 80) {
    letterGrade = 'B';
    // return `you got a B (${percent}%)!`;
  } else if (percent >= 70) {
    letterGrade = 'C';
  } else if (percent >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  return `you got a ${letterGrade} (${percent}%)!`;
};

let result = gradeCalc(13, 20);
console.log(result);
