/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0; 
    let k = new Number(0)
    for (let i = 0 ; i< nums.length ; i++) {
        if (nums[i] === 0) {
            k++
        }
        if (nums[i] === 0 && nums[i+1] !==0) {
            count = count + ((k*(k+1))/2); 
            k=0;
        }
    }
    return count
};
