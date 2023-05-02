/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let high, low, sum, res =[]; 
    nums = nums.sort((a, b) => a-b)
    console.log(nums)
    for (let i = 0;i<nums.length;  i++) {
        if (nums[i] != nums[i-1]) {
        low = i+1; 
        high = nums.length -1; 
        while (low < high ) {
            sum = nums[i] + nums[low] + nums[high]; 
            if (sum === 0) {
                res.push([nums[i] , nums[low] , nums[high]]);
                    while(nums[low] == nums[low + 1]) low ++
                    while(nums[high] == nums[high - 1]) high -- 
                    low ++;
                    high --;
            }
            if (sum < 0) low++
            if (sum > 0) high-- 
             
        }}
    }
    return res
};