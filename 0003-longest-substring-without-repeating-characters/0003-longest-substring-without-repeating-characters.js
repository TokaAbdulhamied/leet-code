/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashWindow = new Map(); 
    let windowStart = 0, windowLength =0 , longest=0; 
    let i ; 
    for ( i =0 ; i < s.length ; i++) {
        let char = s[i]; 
        if (!hashWindow.has(char)) {
            hashWindow.set(char, i)  
        }
        else { 
            if (hashWindow.get(char) >= windowStart) {
                windowLength = i- windowStart ;
                if (longest < windowLength) longest = windowLength;
                windowStart = hashWindow.get(char) +1; 
            }
            hashWindow.set(char, i)  
        }
        
    }
    if (longest < i - windowStart)
        longest = i - windowStart;

    return longest;   
};