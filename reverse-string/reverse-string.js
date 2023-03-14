/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0; 
  let right = s.length -1;
  let temp;  
  console.log(right, left)
  while (right >= left) {
   temp = s[left] ; 
   s[left] = s[right];
   s[right]  = temp;
   right--; 
   left ++;
  }

  return s
    
};