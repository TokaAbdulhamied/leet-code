/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = []; 
    intervals.sort((a,b)=>a[0] - b[0])
    let currentInterval = intervals[0]; 

    console.log (intervals)
    for (let i = 1; i< intervals.length ; i++) {
        if (intervals[i][0] > currentInterval[1]) {
            result.push(currentInterval); 
            currentInterval = intervals[i]
        }
        else {
            currentInterval = [currentInterval[0], Math.max(intervals[i][1],currentInterval[1] )]
        }
        
    }
    result.push(currentInterval); 
    return result
    
};

