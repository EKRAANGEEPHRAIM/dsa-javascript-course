/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    


let candidate = nums[0]
let count = 1

// find candidate
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            // Pick a new candidate when count drops to zero
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate
}


console.log(majorityElement([2,2,3,3,3])) //3