const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {    
        return 8; 
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 9;
    } else if (day === 'sunday') {
        return 10;
    }
  }; 
  
  const getActualSleepHours = () => {
  getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday');
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours(8);
    let idealSleepHours = getIdealSleepHours(5);
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got ' + actualSleepHours + ' hours, that is the  perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You slept ' + (idealSleepHours - actualSleepHours) + ' hours like a pig.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('Oh man, only ' + (idealSleepHours - actualSleepHours) + ' hours of sleep, you should get some rest.');
    }
  };
  
  calculateSleepDebt();
  