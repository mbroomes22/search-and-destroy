'use strict';

// Complete this algo
const minJumps = arr => {
    //*start at index 0
    //value at curr index determines possible steps
    //*arr.length btwn curr index and end
    //reach bigger number in avail steps -->ignore if we have enough steps to reach the end
    //replace possible step value each time curr index changes
    let steps = arr[0];
    let count = 0;
    let currIndex = 0;
    let distance = arr.length-currIndex;
    if (steps >= arr.length) {
        count++
        return count;
    } else {
        while (distance > steps) {
            count++;
            for (let i=currIndex; i<=steps; i++) {
                if(steps < arr[i]) {
                    steps = arr[i];
                }
                currIndex += steps;
            }
        }
        return count;
        
    }
};

module.exports = minJumps