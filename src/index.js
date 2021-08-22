
exports.min = function min (array) {
  let minMass = 0;
  if(array == undefined) {
    return 0;
  } else if (array.length < 1) {
    return 0;
  } else {  
    minMass = array[0];
    for (let i = 0; i < array.length; i++) {
      if (minMass > array[i]) {
        minMass = array[i];
      } 
    }
  }
  return minMass;
}

exports.max = function max (array) {
  let maxMass = 0;
  if(array == undefined) {
    return 0;
  }
  if (array.length < 1) {
    return 0;
  } else {  
    for (let i = 0; i < array.length; i++) {
      if (maxMass < array[i]) {
        maxMass = array[i];
      } 
    }
    
  }
  return maxMass;
}

exports.avg = function avg (array) {
  let avgMass = 0;
  if (array == undefined || array.length < 1) {
    return 0;
  } else {  
    for (let i = 0; i < array.length; i++) {
      avgMass = avgMass + array[i];
      
    }
  }
  return avgMass/array.length;
}
