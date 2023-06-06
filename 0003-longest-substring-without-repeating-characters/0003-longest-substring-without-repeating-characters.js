/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashWindow = {}; 
    let windowStart = 0, windowLength =0 , longest=0; 
    let i ; 
    for ( i =0 ; i < s.length ; i++) {
        let char = s[i]; 
        if (!(char in hashWindow)) {
            hashWindow[char] = i;  
            windowLength++;
            console.log (windowLength)

        }
        else { 
            if (hashWindow[char] >= windowStart) {
                windowLength = i- windowStart ;
                if (longest < windowLength) longest = windowLength;
                windowStart = hashWindow[char] +1; 
            }
            hashWindow[char] = i;
        }
        
    }
    if (longest < i - windowStart)
        longest = i - windowStart;

    return longest;   
};