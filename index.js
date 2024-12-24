// step by step solution in javaScript

function findMinimumPlatrform(arr, dep) {
  //convert time string (HH:MM) to minutes
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  //convert time string to minutes for both arrays
  const arrMinutes = arr.map(timeToMinutes);
  const depMinutes = dep.map(timeToMinutes);

  //Sort arrival and departure time
  arrMinutes.sort((a, b) => a - b);
  depMinutes.sort((a, b) => a - b);

  //Initialize variables
  let plateform_needed = 0;
  let max_plateform = 0;
  let i = 0,
    j = 0;

  //Process events in sorted order
  while (i < arrMinutes.length && j < depMinutes.length) {
    if (arrMinutes[i] <= depMinutes[j]) {
      //Train arrives, increment plateforms needed
      plateform_needed++;
      max_plateform = Math.max(max_plateform, plateform_needed);
      i++;
    } else {
      //Train departs, decrement plateforms needed
      plateform_needed--;
      j++;
    }
  }
  return max_plateform;
}

//Example

const arrival = ["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"];
const departure = ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"];

console.log(findMinimumPlatrform(arrival, departure));

const arrival2 = ["9:00", "9:40"];
const departure2 = ["9:10", "12:00"];

console.log(findMinimumPlatrform(arrival2, departure2));
