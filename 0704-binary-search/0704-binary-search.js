/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   return binarySearch (nums, target, nums.length -1 , 0);
};

function binarySearch (nums, target, R, L){
    let mid = Math.floor((R+L)/2); 
    if (L <= R){
     if (target === nums[mid]) return mid; 
     if (target > nums[mid]) { 
        L = mid + 1; 
        return binarySearch(nums, target, R, L)
     }
     if(target < nums[mid]) {
       R = mid - 1;
       return binarySearch(nums, target, R, L)}
    }
    else return -1
}