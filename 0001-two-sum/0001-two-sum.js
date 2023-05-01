/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let dif = {}; 
   for (let i = 0 ; i< nums.length ; i++) {
       let sub = target - nums[i]
       if (dif[`${sub}`] != undefined) {
           return [dif[`${sub}`], i]
       }
       dif = {...dif, [nums[i]] : i}
   }
   return null
}; 
