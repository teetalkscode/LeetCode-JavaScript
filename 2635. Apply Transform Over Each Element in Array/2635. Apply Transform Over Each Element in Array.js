/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var storedArray = [];
    for ( var i = 0; i < arr.length; i++) {
        storedArray.push (fn(arr[i],i))
    }
    return storedArray;
};
