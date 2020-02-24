
exports.min = function min (array) {
    let min = 0;
    if (!array || array.length===0) {
    } else {
        for (let num of array) {
            if (num<min) {
                min = num
            }
        }
    }
   return min
};

exports.max = function max (array) {
   let max = 0;
    if (!array || array.length===0) {
    } else {
        for (let num of array) {
            if (num>max) {
                max = num
            }
        }
    }
    return max
};

exports.avg = function avg (array) {
      let avg = 0;
    if (!array || array.length===0) {
    } else {
        for (let num of array) {
            avg+=num
        }
        avg /= array.length
    }
    return avg
};
