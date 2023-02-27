const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 5;
      break;
    case "saturday":
      return 6;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () => 8 + 8 + 7 + 8 + 5 + 9 + 10;

console.log(getSleepHours("monday"));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amout of sleep!');
  } 

  else if(actualSleepHours > idealSleepHours){
    console.log("You've got more " + (idealSleepHours - actualSleepHours) + " more hours of sleep this week!");
  } 

  else if(actualSleepHours < idealSleepHours){
    console.log("You should get some rest, because you slept " + (idealSleepHours - actualSleepHours) + " hours less then you should have this week." )
  }

  else{
    console.log('Error! Something went wrong, please check your code.')
  }

};

calculateSleepDebt();

