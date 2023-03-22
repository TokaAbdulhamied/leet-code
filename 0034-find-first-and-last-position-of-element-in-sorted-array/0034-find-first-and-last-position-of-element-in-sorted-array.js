/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
   let obj = {}
   let result = binarySearch (nums, target, nums.length -1 , 0, obj)
   if (result == undefined) {
       return [Object.values(obj)[0], Object.values(obj)[Object.values(obj).length-1]]
   } else {
       return result
   }
};

function binarySearch (nums, target, R, L, obj){
    let mid = Math.floor((R+L)/2); 
    if (L <= R){
    if (target === nums[mid]) {
          obj[mid] = mid
           binarySearch(nums, target, R, mid +1 , obj)
           binarySearch(nums, target, mid - 1, L, obj)
     }; 
     if (target > nums[mid]) { 
        L = mid + 1; 
        return binarySearch(nums, target, R, L, obj)
     }
     if(target < nums[mid]) {
       R = mid - 1;
       return binarySearch(nums, target, R, L, obj)}
    }
    else return [-1,-1]
}