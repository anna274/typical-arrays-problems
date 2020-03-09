
exports.min = function min (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }
  return array.reduce((min, current) => Math.min(min, current), array[0]);
}

exports.max = function max (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }
  return array.reduce((min, current) => Math.max(min, current), array[0]);
}

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0){
    return 0;
  }
  return array.reduce((sum, current) => sum + current, 0)/array.length;
}
