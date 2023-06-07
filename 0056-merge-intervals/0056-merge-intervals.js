/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = []; 
    intervals.sort((a,b) => a[0] - b[0])
    let currentInterval = intervals[0]; 

    console.log (intervals)
    for (let i = 1; i< intervals.length ; i++) {
        const ele = intervals[i]
        if (currentInterval[1] >= ele[0] ) {
            currentInterval = [currentInterval[0], Math.max(ele[1],currentInterval[1])]

        }
        else {
            result.push(currentInterval); 
            currentInterval = ele; 
        }
        
    }
    result.push(currentInterval); 
    return result
    
};

