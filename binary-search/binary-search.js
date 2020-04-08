'use strict';

// Complete this algo
const binarySearch = (array, target) => { // [1,2,3,4,5,6] 1 // [5, 10] 5
	let start = 0; 
	let end = array.length - 1; 
	while (start <= end) {
		let mid = Math.floor((start+end) / 2) // mid : 15, idx: 5 // 4 v: 10
		if (array[mid] === target) return true;
		else if (array[mid] < target) {  // 5 < 10
			start = mid + 1 // 4
		} else {
			end = mid - 1 // 4
		}
	}
	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
