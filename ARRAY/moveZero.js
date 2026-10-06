var moveZeroes = function(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== insertPos) {
                nums[insertPos] = nums[i];
                nums[i] = 0;
            }
            insertPos++;
        }
    }
    
};


let myNums = [0, 1, 0, 3, 12];


moveZeroes(myNums);


console.log(myNums); //  [1, 3, 12, 0, 0]



