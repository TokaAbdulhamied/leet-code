/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k 
    return quickSelect(nums, 0, nums.length -1,indexToFind )
}

function quickSelect (array, left, right, k) {
    if (left < right ) {
        let partitionIndex = partition (array, left, right)
        if (partitionIndex === k) return array[partitionIndex]; 
        if (partitionIndex < k) {
            return quickSelect(array, partitionIndex +1 , right, k)
        }
        if (partitionIndex > k) {
            return quickSelect(array, left , partitionIndex -1, k)
        }
    }
    else return array[k]
}

function partition (array, left, right) {
    let i =  left ; // partition index
    let p = array[right];  // pevotelement 
    for (let j = left; j< right ; j++){
        if (array[j] < p ) {
        swap (array, i, j )
        i++
    }
  }
    swap(array, i, right)
    return i;
}

function swap (array, e1, e2){
    
    let temp = array[e1]; 
    array[e1] = array[e2]
    array[e2] = temp
}